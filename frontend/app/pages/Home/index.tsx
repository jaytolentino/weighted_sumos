import * as React from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XXL, MD } from '@zendeskgarden/react-typography';

import Layout from 'components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Grid>
        <Row>
          <Col>
            <XXL>Home</XXL>
          </Col>
        </Row>
        <Row>
          <Col>
            <MD>Welcome to the home page!</MD>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default Home;
