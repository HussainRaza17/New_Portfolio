import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';

import RfidsApp from '~/assets/RFIDS/main-page.png';
import RfidsAppLarge from '~/assets/RFIDS/main-page.png';
import RfidsAppPlaceholder from '~/assets/RFIDS/main-page.png';

import Rfidscontent from '~/assets/RFIDS/content.png';
import RfidscontentLarge from '~/assets/RFIDS/content.png';
import RfidscontentPlaceholder from '~/assets/RFIDS/content.png';

import RfidsFeatures from '~/assets/RFIDS/features.png';
import RfidsFeaturesLarge from '~/assets/RFIDS/features.png';
import RfidsFeaturesPlaceholder from '~/assets/RFIDS/features.png';

import RfidsImprovement from '~/assets/RFIDS/improvement.png';
import RfidsImprovementLarge from '~/assets/RFIDS/improvement.png';
import RfidsImprovementPlaceholder from '~/assets/RFIDS/improvement.png';

import RfidsResult from '~/assets/RFIDS/last result.png';
import RfidsResultPlaceholder from '~/assets/RFIDS/last result.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './rfids.module.css';

const title = 'Defending against DDoS attacks';
const description =
  'Built a robust IDS model using Random Forest to detect and classify Distributed Denial-of-Service (DDoS) attacks. Trained on the CIC-IDS-2017 dataset, this project showcases efficient feature engineering and real-time threat prediction capabilities.';
const roles = ['Python','Google CO-Lab', 'CIC-IDS 2017', 'Random Forest Classifier Model'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Rfids = () => {
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
          url="https://github.com/HussainRaza17/RF-IDS-DDoS-Random-Forest-based-Intrusion-Detection-System-for-DDoS-Attacks"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${RfidsApp} 800w, ${RfidsAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={RfidsAppPlaceholder}
              alt="The RFIDS app interface, showing the main page with network traffic data."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                This project focuses on creating an Intrusion Detection System (IDS) using the Random Forest algorithm to detect and classify Distributed Denial-of-Service (DDoS) attacks. Built using Python and developed in Google Colab, the system analyzes network traffic data from the CIC-IDS-2017 dataset.
              </ProjectSectionText>
              <ProjectSectionText>
                It processes over a million records, cleans and selects relevant features, and trains a robust model capable of real-time detection with high accuracy.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${Rfidscontent} 350w, ${RfidscontentLarge} 700w`}
                width={350}
                height={750}
                placeholder={RfidscontentPlaceholder}
                alt="The RFIDS app interface, showing the content page with detailed network traffic analysis."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${Rfidscontent} 350w, ${RfidscontentLarge} 700w`}
                width={350}
                height={750}
                placeholder={RfidscontentPlaceholder}
                alt="The RFIDS app interface, showing the content page with detailed network traffic analysis."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the Security Posture</ProjectSectionHeading>
              <ProjectSectionText>
                This project improves the network security landscape by enabling faster and more reliable detection of abnormal traffic patterns. It automates the identification of DDoS threats and reduces human effort in threat monitoring. The system can be integrated into IoV and IoT environments where lightweight, high-accuracy models are essential.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${RfidsFeatures} 800w, ${RfidsFeaturesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={RfidsFeaturesPlaceholder}
              alt="The RFIDS app interface, showing the features page with model performance metrics and real-time detection capabilities."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${RfidsImprovement} 440w, ${RfidsImprovementLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={RfidsImprovementPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                During this project, over one million rows of raw network flow data were carefully merged and preprocessed to create a clean dataset suitable for machine learning. Key steps included removing null values, handling outliers, encoding categorical features, and scaling numerical data. Feature selection techniques were applied to reduce dimensionality and retain only the most impactful attributes, improving both performance and interpretability. Exploratory Data Analysis (EDA) was conducted using heatmaps, correlation plots, and distribution graphs to better understand the data patterns and relationships. These steps not only improved model efficiency but also built a strong foundation for real-time intrusion detection workflows.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The resulting Random Forest-based IDS model demonstrated impressive results, achieving over 99% accuracy in detecting and classifying DDoS attacks. The model also showed high precision and recall, making it suitable for real-world applications where false positives can be costly. Beyond the performance metrics, this project delivered a fully modular and reproducible pipeline — from raw data processing to model deployment — that can be adapted for other cybersecurity use cases. The experience gained also contributed to a deeper understanding of ensemble learning in the context of network security. This project has been officially copyrighted and is reserved for academic and research use, forming a solid base for future work in hybrid IDS systems.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={RfidsResult}
              width={940}
              height={500}
              placeholder={RfidsResultPlaceholder}
              alt="Last result of the RFIDS project, showcasing the final model performance metrics and detection capabilities."
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
