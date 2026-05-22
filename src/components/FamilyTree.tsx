"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useFamilyView } from "@/lib/context/FamilyViewContext";
import { familyMembers, searchMembers, type FamilyMember } from "@/lib/data/familyTree";
import arTranslations from "@/lib/translations/ar.json";

// Custom tree component (simpler than react-d3-tree for static export)
export function FamilyTree() {
  const { isFamilyView } = useFamilyView();
  const [selectedMember, setSelectedMember] = useState<FamilyMember | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const founders = familyMembers.filter((m) => m.generation === 1);
  const searchResults = searchQuery ? searchMembers(searchQuery) : [];

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isFamilyView ? arTranslations.familyTree.search.placeholder : arTranslations.familyTree.search.locked}
            disabled={!isFamilyView}
            className="w-full px-4 py-3 rounded-lg border border-[#E8E3D7] bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4A47] disabled:bg-[#FAF8F3] disabled:cursor-not-allowed"
          />
          {!isFamilyView && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAF8F3]/80 rounded-lg">
              <span className="text-sm text-[#6B6B68]">{arTranslations.familyTree.search.locked}</span>
            </div>
          )}
        </div>
        
        {/* Search results */}
        {isFamilyView && searchResults.length > 0 && (
          <div className="mt-2 bg-white rounded-lg shadow-lg border border-[#E8E3D7] overflow-hidden">
            {searchResults.map((member) => (
              <button
                key={member.id}
                onClick={() => {
                  setSelectedMember(member);
                  setSearchQuery("");
                }}
                className="w-full px-4 py-2 text-start hover:bg-[#FAF8F3] border-b border-[#E8E3D7] last:border-0"
              >
                <span className="font-medium">{member.name}</span>
                <span className="text-sm text-[#6B6B68] ms-2">- {member.relation}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tree visualization */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px] p-8">
          {founders.map((founder) => (
            <TreeNode
              key={founder.id}
              member={founder}
              onSelect={setSelectedMember}
              isFamilyView={isFamilyView}
            />
          ))}
        </div>
      </div>

      {/* Member details modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
            isFamilyView={isFamilyView}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Recursive tree node component
function TreeNode({
  member,
  onSelect,
  isFamilyView,
  level = 0,
}: {
  member: FamilyMember;
  onSelect: (m: FamilyMember) => void;
  isFamilyView: boolean;
  level?: number;
}) {
  const children = familyMembers.filter((m) => member.children?.includes(m.id));

  return (
    <div className="flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(member)}
        className={`relative z-10 w-32 p-3 rounded-lg border-2 text-center transition-colors ${
          level === 0
            ? "bg-[#1F4A47] text-white border-[#1F4A47]"
            : "bg-white border-[#D4B896] hover:border-[#1F4A47]"
        }`}
      >
        <div className="font-bold text-sm">{member.name}</div>
        <div className="text-xs opacity-70">{member.relation}</div>
      </motion.button>

      {children.length > 0 && (
        <div className="mt-8 flex gap-4">
          {children.map((child) => (
            <div key={child.id} className="relative">
              {/* Connector line */}
              <div className="absolute -top-8 left-1/2 w-px h-8 bg-[#D4B896] -translate-x-1/2" />
              <TreeNode
                member={child}
                onSelect={onSelect}
                isFamilyView={isFamilyView}
                level={level + 1}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Member details modal
function MemberModal({
  member,
  onClose,
  isFamilyView,
}: {
  member: FamilyMember;
  onClose: () => void;
  isFamilyView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-[#1F4A47] font-arabic-heading">
            {isFamilyView ? member.fullName : member.name}
          </h3>
          <button onClick={onClose} className="text-[#6B6B68] hover:text-[#1A1A1A]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-3 text-sm">
          <p>
            <span className="font-medium text-[#6B6B68]">{arTranslations.familyTree.modal.generation}:</span>{" "}
            {member.generation}
          </p>
          <p>
            <span className="font-medium text-[#6B6B68]">{arTranslations.familyTree.modal.relation}:</span>{" "}
            {member.relation}
          </p>
          <p>
            <span className="font-medium text-[#6B6B68]">{arTranslations.familyTree.modal.dates}:</span>{" "}
            {member.birthYear} {member.deathYear ? `- ${member.deathYear}` : ""}
          </p>
          
          {isFamilyView && member.contact && (
            <p>
              <span className="font-medium text-[#6B6B68]">{arTranslations.familyTree.modal.contact}:</span>{" "}
              {member.contact}
            </p>
          )}
          {isFamilyView && member.email && (
            <p>
              <span className="font-medium text-[#6B6B68]">Email:</span>{" "}
              {member.email}
            </p>
          )}
          {isFamilyView && member.branch && (
            <p>
              <span className="font-medium text-[#6B6B68]">الفرع:</span>{" "}
              {member.branch}
            </p>
          )}
        </div>

        <Button onClick={onClose} className="w-full mt-6">
          {arTranslations.common.close}
        </Button>
      </motion.div>
    </motion.div>
  );
}