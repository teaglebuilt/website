import {
  SiCloudflare,
  SiConsul,
  SiKubernetes,
  SiMongodb,
  SiPihole,
  SiPython,
  SiRaspberrypi,
  SiWeb3Dotjs,
  SiWebpack,
  SiWebrtc,
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
    case 'MongoDB':
      const MongoDB = styled(SiMongodb)`
        color: #47a248;
      `;
      return <MongoDB />;
    case 'WebRTC':
      const WebRTC = styled(SiWebrtc)`
        color: #333333;
      `;
      return <WebRTC />;
    case 'Web3':
      const Web3 = styled(SiWeb3Dotjs)`
        color: #f16822;
      `;
      return <Web3 />;
    default:
      return '';
  }
};

export default Icon;
