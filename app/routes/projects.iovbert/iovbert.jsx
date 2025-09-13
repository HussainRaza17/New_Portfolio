// import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
// import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
// import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
// import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
// import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
// import sliceAnnotation from '~/assets/slice-annotation.png';
// import sliceAppLarge from '~/assets/slice-app-large.jpg';
// import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
// import sliceApp from '~/assets/slice-app.jpg';
// import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
// import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
// import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
// import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
// import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
// import sliceBackground from '~/assets/slice-background.jpg';
// import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
// import sliceIrl from '~/assets/slice-irl.jpg';
// import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
// import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
// import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
// import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
// import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
// import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
// import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
// import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
// import sliceSlides from '~/assets/slice-slides.jpg';

import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';

import IovbertSideContent1 from '~/assets/IOVBERT/sideview1.png';
import IovbertSideContent1Large from '~/assets/IOVBERT/sideview1.png';
import IovbertSideContent1Placeholder from '~/assets/IOVBERT/sideview1.png';

import IovbertSideContent2 from '~/assets/IOVBERT/sideview2.png';
import IovbertSideContent2Large from '~/assets/IOVBERT/sideview2.png';
import IovbertSideContent2Placeholder from '~/assets/IOVBERT/sideview2.png';

import IovConfusionMatrix from '~/assets/IOVBERT/confusionMatrix.png';
import IovConfusionMatrixPlaceholder from '~/assets/IOVBERT/confusionMatrix.png';
import IovConfusionMatrixLarge from '~/assets/IOVBERT/confusionMatrix.png';

import IovMainCover from '~/assets/IOVBERT/iovmainpage.png';
import IovMainCoverPlaceholder from '~/assets/IOVBERT/iovmainpage.png';
import IovMainCoverLarge from '~/assets/IOVBERT/iovmainpage.png';

import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { ThemeProvider } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './iovbert.module.css';

const title = 'Securing IoV with BERT-based IDS';
const description =
  'A next-generation hybrid intrusion detection system that combines BERT-based contextual embeddings with LightGBM classification to deliver real-time monitoring, anomaly detection, and intelligent threat analysis for connected vehicles and IoT networks.';
const roles = ['Python','Streamlit', 'PyShark + Wireshark', 'BERT (Sentence Transformers)', 'LightGBM', 'CIC-IDS 2017'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Iovbert = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.rfids}>
        <ProjectBackground
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1280w, ${backgroundSprLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={backgroundSprPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/HussainRaza17/IoV-BERT-IDS"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                IoV-BERT-IDS is a real-time network intrusion detection and monitoring system designed for the Internet of Vehicles (IoV) and modern IoT environments. It combines BERT-based embeddings with a LightGBM classifier to achieve high-accuracy detection of cyber threats while minimizing false positives. The system captures live traffic through PyShark, performs bidirectional flow analysis, and leverages out-of-distribution (OOD) detection to identify anomalies beyond its training data. With an interactive Streamlit dashboard, IoV-BERT-IDS provides real-time visualizations, alerts, and performance metrics, making intrusion detection both scalable and accessible.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${IovbertSideContent2} 350w, ${IovbertSideContent2Large} 700w`}
                width={350}
                height={750}
                placeholder={IovbertSideContent2Placeholder}
                alt="The RFIDS app interface, showing the content page with detailed network traffic analysis."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${IovbertSideContent1} 350w, ${IovbertSideContent1Large} 700w`}
                width={350}
                height={750}
                placeholder={IovbertSideContent1Placeholder}
                alt="The RFIDS app interface, showing the content page with detailed network traffic analysis."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Innovation and Significance</ProjectSectionHeading>
              <ProjectSectionText>
                IoV-BERT-IDS adapts natural language processing methods to cybersecurity, treating network flows as contextual sequences rather than isolated features. This cross-domain innovation allows the system to capture hidden relationships in traffic, improving detection accuracy against evolving attack types. Unlike conventional IDS tools, it supports continuous, real-time monitoring with a modern, user-friendly dashboard, bridging the gap between academic research and deployable solutions for IoV and IoT security.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${IovConfusionMatrix} 800w, ${IovConfusionMatrixLarge} 1920w`}
              width={800}
              height={500}
              placeholder={IovConfusionMatrixPlaceholder}
              alt="The RFIDS app interface, showing the features page with model performance metrics and real-time detection capabilities."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
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
                  <ProjectSectionHeading>Key Features</ProjectSectionHeading>
                  <ProjectSectionText>
                    <ul>
                      <li>Real-Time Monitoring: Captures and analyzes network packets on live interfaces.</li>
                      <li>BERT-Powered Detection: Leverages transformer embeddings for contextual traffic understanding.</li>
                      <li>Hybrid Classification: Uses LightGBM to deliver fast and accurate predictions.</li>
                      <li>Anomaly & OOD Detection: Identifies traffic patterns that differ from training data.</li>
                      <li>Alert Management: Severity-based notifications with detailed flow insights.</li>
                      <li>Interactive Dashboard: Visualizes attacks, protocols, confidence levels, and flow statistics.</li>
                      <li>Export & Logging: Supports exporting flows, alerts, and system statistics for analysis.</li>
                    </ul>
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${IovMainCover} 1280w, ${IovMainCoverLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={IovMainCoverPlaceholder}
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
                IoV-BERT-IDS successfully delivered a production-ready intrusion detection system that goes beyond static evaluation. It demonstrated high detection accuracy across multiple attack categories while maintaining low false positives through contextual embeddings. The live monitoring engine and dashboard made intrusion detection transparent, interactive, and scalable, with actionable alerts and exportable insights. By integrating BERT embeddings, LightGBM classification, and OOD anomaly detection, the project established a strong foundation for next-generation intrusion detection in connected vehicles and IoT ecosystems.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
