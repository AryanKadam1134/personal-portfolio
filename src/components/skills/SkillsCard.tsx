import type { SkillCategoryWithSkills } from "../../types/types";

export const SkillsCard = ({
  skillDetails,
}: {
  skillDetails: SkillCategoryWithSkills;
}) => {
  const { name, logoUrl, skills } = skillDetails || {};

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-2 text-2xl font-semibold text-white">
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
                className="w-[140px] rounded-xl border border-white/20 bg-white/2 p-6 backdrop-blur-xs transition-all duration-300 hover:scale-101 hover:border-white/50 hover:shadow-xl hover:shadow-white/10"
              >
                <div className="flex h-full flex-col items-center justify-center gap-3">
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
