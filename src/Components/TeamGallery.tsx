import React from "react";

interface TeamMember {
  name: string;
  image: string;
  role: string;
}

interface TeamGalleryProps {
  teamMembers: TeamMember[];
}

const TeamGallery: React.FC<TeamGalleryProps> = ({ teamMembers }) => {
  return (
    <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8">
      <div className="grid grid-cols-2 gap-4 h-full">
        {teamMembers.map((member, index) => (
          <div
            key={`static-team-${index}`}
            className="relative overflow-hidden rounded-2xl opacity-100"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGallery;
