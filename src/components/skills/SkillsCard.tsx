import type { SkillCategoryWithSkills } from "../../types/types";

export const SkillsCard = ({
  skillDetails,
}: {
  skillDetails: SkillCategoryWithSkills;
}) => {
  const { name, logoUrl, skills } = skillDetails || {};

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-2 font-semibold text-2xl text-white">
        <span>{logoUrl}</span>
        <span>{name}</span>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {skills
          ?.sort((a, b) => a.sortOrder - b.sortOrder)
          ?.map((skill, idx) => {
            const { _id, name, logoUrl } = skill || {};

            return (
              <div
                key={_id || idx}
                className="p-6 w-[140px] bg-white/2 backdrop-blur-xs
                border border-white/20 hover:border-white/50 rounded-xl
                hover:scale-101 hover:shadow-xl hover:shadow-white/10
                transition-all duration-300"
              >
                <div className="h-full flex flex-col items-center justify-center gap-3">
                  {logoUrl ? (
                    <img
                      src={
                        logoUrl?.includes("https")
                          ? logoUrl
                          : `src/assets/${logoUrl}`
                      }
                      alt={name}
                      className="size-10"
                    />
                  ) : (
                    <div>{name.charAt(0).toUpperCase()}</div>
                  )}

                  <p className="text-center text-sm text-white">{name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
