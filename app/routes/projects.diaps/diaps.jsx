import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';

import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';

import videoDiapsMapLarge from '~/assets/DIAPS/diapsMapwork.mp4';
import videoDiapsMapPlaceholder from '~/assets/DIAPS/diapsMapCover.png';
import videoDiapsMap from '~/assets/DIAPS/diapsMapwork.mp4';

import imageAnalysisTextureLarge from '~/assets/DIAPS/diapsAnalycover.png';
import imageAnalysisTexturePlaceholder from '~/assets/DIAPS/diapsAnalycover.png';
import imageAnalysisTexture from '~/assets/DIAPS/diapsAnalycover.png';

import imageDashboardTextureLarge from '~/assets/DIAPS/diapsDashCover.png';
import imageDashboardTexturePlaceholder from '~/assets/DIAPS/diapsDashCover.png';
import imageDashboardTexture from '~/assets/DIAPS/diapsDashCover.png';

import imageReportTextureLarge from '~/assets/DIAPS/diapsReportCover.png';
import imageReportTexturePlaceholder from '~/assets/DIAPS/diapsReportCover.png';
import imageReportTexture from '~/assets/DIAPS/diapsReportCover.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';

import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './diaps.module.css';


const title = 'From Data to Decision: A Proactive Disaster Management Platform';
const description =
  'DIAPS (Disaster Information & Prediction System) is a comprehensive web application I designed and developed to centralize disaster monitoring. It transforms scattered, complex data into a clear, actionable interface for real-time tracking, risk analysis, and predictive insight.';
const roles = [
  'Lead Front End Development',
  'TypeScript',
  'React',
  'shadcn-ui',
  'Tailwind CSS',
  'Vite',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Diaps = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/HussainRaza17/DIAPS-Disaster-Prediction-System"
          url2="https://diaps-disaster-prediction-system.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageDashboardTexture} 1280w, ${imageDashboardTextureLarge} 2560w`
                  : `${imageDashboardTexture} 1280w, ${imageDashboardTextureLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageDashboardTexturePlaceholder
                  : imageDashboardTexturePlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Challenge: The Fog of Crisis</ProjectSectionHeading>
            <ProjectSectionText>
              Disaster management is often hindered by fragmented information from disparate sources. Emergency response teams and analysts lack a single source of truth, making it difficult to assess real-time risks, identify trends, and make proactive decisions. The goal of DIAPS was to solve this by creating a centralized hub that aggregates, analyzes, and visualizes critical disaster data.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageReportTexture} 1024w, ${imageReportTextureLarge} 2048w`
                  : `${imageReportTexture} 1024w, ${imageReportTextureLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageReportTexturePlaceholder
                  : imageReportTexturePlaceholder
              }
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Engineering a Resilient & Scalable UI</ProjectSectionHeading>
              <ProjectSectionText>
                To handle a high density of information, the interface required a robust and consistent design system. I built the entire front end using a modern stack: React, TypeScript, and Vite for a performant, type-safe foundation. The UI was crafted with Tailwind CSS and a custom component library based on shadcn/ui, allowing for rapid development of beautiful, accessible, and highly composable elements without being locked into the opinions of a traditional component library.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageAnalysisTexture} 1280w, ${imageAnalysisTextureLarge} 2560w`
                  : `${imageAnalysisTexture} 1280w, ${imageAnalysisTextureLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageAnalysisTexturePlaceholder
                  : imageAnalysisTexturePlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Visualizing Complexity: From Raw Data to Insight</ProjectSectionHeading>
              <ProjectSectionText>
                The core of DIAPS is its ability to make complex data understandable. I engineered the analytics dashboard to process and display historical and predictive data through interactive charts and risk heatmaps. By integrating various external APIs and using libraries like Chart.js, the platform provides at-a-glance insights into disaster frequency, regional vulnerabilities, and predictive risk scores, empowering users to move from reactive monitoring to strategic planning.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Real-time Situational Awareness</ProjectSectionHeading>
                  <ProjectSectionText>
                    The main dashboard provides a live, mission-critical overview. I integrated Leaflet.js to create an interactive map with dynamic risk overlays. This was combined with a series of data cards and trend graphs that display constantly updating information on specific threats and environmental conditions. The result is a powerful tool that gives users immediate situational awareness, which is crucial during an unfolding event.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${videoDiapsMap} 1280w, ${videoDiapsMapLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={videoDiapsMapPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                DIAPS stands as a powerful, portfolio-defining project that successfully demonstrates end-to-end product development. It showcases advanced skills in modern front-end architecture, sophisticated UI/UX design for data-heavy applications, and the ability to integrate and visualize complex data streams. The final application is a functional, performant, and visually polished tool that effectively solves the initial challenge of creating a single, reliable source of truth for disaster management.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
