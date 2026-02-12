import SkillsProps from "./SkillsProps";

type ProjectProps = {
  name: string;
  shortDescription: string;
  longDescription: React.ReactElement;
  link: string;
  color: string;
  skills?: SkillsProps[];
  gallery?: string[] | undefined;
};
export default ProjectProps;
