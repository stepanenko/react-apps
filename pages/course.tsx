
import { withRouter } from "next/router";
import Layout from "../components/Layout";

type CourseProps = {
  router?: any;
};

const Course: React.FunctionComponent<CourseProps> = ({ router }) => {
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is a course.</p>
    </Layout>
  );
};

export default withRouter(Course);
