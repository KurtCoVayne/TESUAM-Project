import carrousel1 from "../../../../public/carrousel1.png";
import carrousel2 from "../../../../public/carrousel2.png";
import ProjectsCards from '../common/projectscards';
import BigTitle from "@/components/ui/common/bigtitle";
import BigMiniTitle from "../common/bigminititle";
import phrases from '@/assets/locales/es.json';
import HashtagBanner from '@/components/ui/common/HashtagBanner';
const ProjectsComponent: React.FC = () => {
    return (
        <section className="bg-white dark:bg-foundationcolorwhite">
            <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
                
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <ProjectsCards image={carrousel1} title="titulo 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique suscipit metus, sed sagittis sem pellentesque ut. Sed sit amet nulla euismod odio finibus pharetra volutpat nec tellus." />
                    <ProjectsCards image={carrousel2} title="titulo 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique suscipit metus, sed sagittis sem pellentesque ut. Sed sit amet nulla euismod odio finibus pharetra volutpat nec tellus." />
                    <ProjectsCards image={carrousel1} title="titulo 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique suscipit metus, sed sagittis sem pellentesque ut. Sed sit amet nulla euismod odio finibus pharetra volutpat nec tellus." />
                </div>
            </div>
        </section>
    )
}
export default ProjectsComponent;