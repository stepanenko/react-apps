
import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";

type CourseProps = {
  title?: string;
};

const CourseLink: React.FunctionComponent<CourseProps> = ({ title }) => {
  return (
    <li>
      <Link href={`/course?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Courses: React.FunctionComponent = () => {
  return (
    <Layout title="Courses">
      <h1>Here are our courses</h1>
      <CourseLink title="Next.js Video Tutorial" />
      <CourseLink title="Learn NodeJS in 3 months" />
      <CourseLink title="How to eploy apps with Zeit" />
    </Layout>
  );
};

export default Courses;
