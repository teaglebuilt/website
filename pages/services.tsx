import { NextPage } from 'next';
import TabsRender from '../containers/tabs';
import Team from '../containers/team';
import Layout from '../src/layout';

const Services: NextPage = ({ props }) => {
  return (
    <Layout>
      <section className="text-gray-600 body-font w-full">
        <div className="container mx-auto flex flex-wrap justify-center">
          <Team />
          <TabsRender />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
