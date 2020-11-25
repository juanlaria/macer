import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../../shared/styles';
import { VideoSection, VideoWrapper } from './styles';

const Video = ({ primary: { component_id, video, grey }, className }) => {
  const id = component_id && (RichText.asText(component_id) || null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <VideoSection className={`${className} ${grey ? '-grey' : ''}`} ref={ref}>
      <div id={id} className="anchor" />
      <Container>
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 20, opacity: 0 },
          }}
          transition={{
            damping: 20,
            stiffness: 25,
            duration: 0.5,
          }}
        >
          <VideoWrapper>
            <iframe
              width="560"
              height="315"
              src={video.url}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </motion.div>
      </Container>
    </VideoSection>
  );
};

Video.propTypes = {
  primary: PropTypes.shape({
    video: PropTypes.string,
  }).isRequired,
};

export default Video;
