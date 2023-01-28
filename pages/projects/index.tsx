import { GetServerSideProps } from "next";

const ProjectPage = () => {

    return (
        <div className="text-white">
            This page will be project listing/grid page
        </div>
    )
}

export default ProjectPage;
export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {}
    }
}