import {
  SiCloudflare,
  SiConsul,
  SiKubernetes,
  SiPihole,
  SiPython,
  SiRaspberrypi,
  SiWebpack,
} from 'react-icons/si';
import styled from 'styled-components';

const Icon = (props) => {
  switch (props.name) {
    case 'Python':
      const Python = styled(SiPython)`
        color: #3776ab;
      `;
      return <Python />;
    case 'Pihole':
      const Pihole = styled(SiPihole)`
        color: #96060c;
      `;
      return <Pihole />;
    case 'Kubernetes':
      const Kubernetes = styled(SiKubernetes)`
        color: #326ce5;
      `;
      return <Kubernetes />;
    case 'Webpack':
      const Webpack = styled(SiWebpack)`
        color: #8dd6f9;
      `;
      return <Webpack />;
    case 'Raspberry Pi':
      const Rpi = styled(SiRaspberrypi)`
        color: #a22846;
      `;
      return <Rpi />;
    case 'Consul':
      const Consul = styled(SiConsul)`
        color: #f24c53;
      `;
      return <Consul />;
    case 'Cloudfare':
      const Cloudflare = styled(SiCloudflare)`
        color: #f38020;
      `;
      return <Cloudflare />;
    default:
      return '';
  }
};

export default Icon;
