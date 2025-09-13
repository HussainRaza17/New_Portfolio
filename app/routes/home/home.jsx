import iovbertTextureLarge from '~/assets/IOVBERT/iovmainpage.png';
import iovbertTexturePlaceholder from '~/assets/IOVBERT/iovmainpage.png';
import iovbertTexture from '~/assets/IOVBERT/iovmainpage.png';

import rfidcTextureLarge from '~/assets/project-RF-IDS-DDoS.png';
import rfidcTexturePlaceholder from '~/assets/project-RF-IDS-DDoS.png';
import rfidcTexture from '~/assets/project-RF-IDS-DDoS.png';

import todoappTextureLarge from '~/assets/todo-app/todo-cover.png';
import todoappTexturePlaceholder from '~/assets/todo-app/todo-cover.png';
import todoappTexture from '~/assets/todo-app/todo-cover.png';
import todoappTexture2Large from '~/assets/todo-app/todo-cover2.png';
import todoappTexture2Placeholder from '~/assets/todo-app/todo-cover2.png';
import todoappTexture2 from '~/assets/todo-app/todo-cover2.png';

import diapsTextureLarge from '~/assets/DIAPS/diapsDashCover.png';
import diapsTexturePlaceholder from '~/assets/DIAPS/diapsDashCover.png';
import diapsTexture from '~/assets/DIAPS/diapsDashCover.png';

import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';

import config from '~/config.json';
import styles from './home.module.css';


// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Security Analyst + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro,details, projectOne, projectTwo, projectThree, projectFour];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Securing IoV with BERT-based IDS"
        description="Developing a hybrid Intrusion Detection System for the Internet of Vehicles using transformer-based contextual learning"
        buttonText="View project"
        buttonLink="/projects/iovbert"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${iovbertTexture} 1280w, ${iovbertTextureLarge} 2560w`,
              placeholder: iovbertTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Visualizing Global Risk"
        description="Designing and developing a comprehensive platform for real-time disaster monitoring, predictive analysis, and intelligent risk assessment."
        buttonText="View project"
        buttonLink="/projects/Diaps"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${diapsTexture} 1280w, ${diapsTextureLarge} 2560w`,
              placeholder: diapsTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Defending against DDoS attacks"
        description="Developing a Random Forest-based Intrusion Detection System for intelligent threat mitigation"
        buttonText="View project"
        buttonLink="/projects/rfids"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${rfidcTexture} 800w, ${rfidcTextureLarge} 1920w`,
              placeholder: rfidcTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Simplifying task management"
        description="Creating a responsive To-Do App for efficient daily productivity"
        buttonText="View App"
        buttonLink="https://hussainraza17.github.io/To-Do_App/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${todoappTexture} 375w, ${todoappTextureLarge} 750w`,
              placeholder: todoappTexturePlaceholder,
            },
            {
              srcSet: `${todoappTexture2} 375w, ${todoappTexture2Large} 750w`,
              placeholder: todoappTexture2Placeholder,
            },
          ],
        }}
      />
      
      <Footer />
    </div>
  );
};
