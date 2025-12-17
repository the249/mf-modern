import { Helmet } from '@modern-js/runtime/head';
import './index.css';
// import Provider from 'provider';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>

    <div className="landing-page">
      This consumes component from provider
    </div>
    {/* <Provider /> */}
  </div>
);

export default Index;
