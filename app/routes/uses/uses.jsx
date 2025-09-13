import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'An overview of my cybersecurity, development, and DevOps skills, along with the tools and platforms I use daily.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Tech Stack & Skills”"
          description="This page highlights my core skills in cybersecurity, development, and DevOps, along with the tools and platforms I use to apply them in real-world projects. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cybersecurity Skills & Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Penetration Testing & Ethical Hacking</strong> → using  <Link href="https://www.kali.org/">Kali Linux</Link>, <Link href="https://ubuntu.com/">Ubuntu</Link>, <Link href="https://portswigger.net/burp">Burp Suite</Link>, <Link href="https://www.wireshark.org/">Wireshark</Link>, Nmap, and Metasploit.
                  </ListItem>
                  <ListItem>
                    <strong>Threat Detection & Incident Response</strong> → leveraging <Link href="https://www.splunk.com/">Splunk</Link>, ELK Stack, and custom-built IDS models.
                  </ListItem>
                  <ListItem>
                    <strong>Vulnerability Research & Continuous Learning</strong> → practicing on <Link href="https://tryhackme.com/p/AkumaTenshi">TryHackMe</Link>, Hack The Box, and <Link href="https://hackerone.com">HackerOne</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development Skills & Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Frontend Development</strong> → React, Tailwind CSS, modern JavaScript/TypeScript.
                  </ListItem>
                  <ListItem>
                    <strong>Backend Development</strong> → Django (Python), Express.js (Node.js).
                  </ListItem>
                  <ListItem>
                    <strong>Database Management</strong> → PostgreSQL, MySQL, and MongoDB.
                  </ListItem>
                  <ListItem>
                    <strong>Secure Coding Practices</strong> → integrating security into each stage of the development lifecycle.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>DevOps & Cloud Skills & Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Containerization & Orchestration</strong> → Docker, Kubernetes.
                  </ListItem>
                  <ListItem>
                    <strong>CI/CD Automation</strong> → GitHub Actions, GitLab CI.
                  </ListItem>
                  <ListItem>
                    <strong>Cloud Deployment & Scaling</strong> → AWS, Vercel, Netlify.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Asus Vivobook S15 13th Gen Intel Core i5-13500H</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Primary OS</TableHeadCell>
                    <TableCell>Windows</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Secondary OS</TableHeadCell>
                    <TableCell>Kali Linux & Ubuntu</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
