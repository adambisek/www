import '../css'

import ReactMarkdown from 'react-markdown'
import Header from '@app/course-landing/components/Header'
import HeaderLink from '@app/course-landing/components/HeaderLink'
import TextFrame from '@app/course-landing/components/TextFrame';
import TextFrameWithImage from '@app/course-landing/components/TextFrameWithImage';
import MyClients from '@app/course-landing/components/MyClients';
import ThreeCol from '@app/course-landing/components/ThreeCol';
import TwoCol from '@app/course-landing/components/TwoCol';
import Navigation from '@app/course-landing/components/Navigation';
import Recommendation from '@app/course-landing/components/Recommendation'
import Contact from '@app/course-landing/components/Contact'
import FooterOndrejSika from '@app/course-landing/components/FooterOndrejSika';
import Head from 'next/head'

let site = {
  lang: 'en'
}

const Index = () => (
  <div>
    <Head>
        <title>Gitlab training, Ondrej Sika - gitlab-training.uk</title>
    </Head>
    <Navigation/>
    <Header
      websiteHeader="Gitlab CI training"
      byName="Ondrej Sika"
      byUrl="https://ondrej-sika.uk/?x_source=gitlab-training.uk"
      logoUrl="/static/gitlab-ci.svg"
    >
      <HeaderLink url="https://ondrej-sika.cz/skoleni/gitlab-ci/poptavka/?x_source=skoleni-gitlab-ci.cz">Nezávazně poptat školení</HeaderLink>
      <HeaderLink url="https://ondrej-sika.cz/kontakt/?x_source=skoleni-gitlab-ci.cz">Kontaktovat</HeaderLink>
    </Header>
    <div className="container container-width">
      <TextFrame>
      <ReactMarkdown source={`
### What is CI?
Continuous Integration (abbr. CI or CI/CD) is a tool that automates routine tasks such as running tests, code quality or deployment. It allows faster adoption of changes to master and quicker deployment. The compelling advantage of Gitlab CI is its Docker support; you can easily combine Docker images or run tests in containers.

        `}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Course Description
This course is run in the form of a workshop where you will learn the importance of CI, the different versions of Gitlab CI and practice writing CI script for a sample project. The outcome will be a script for a simple project containing application build jobs, from tests to deployment.
`}/>
      </TextFrame>
      <TextFrame>
      <ReactMarkdown source={`
### Course outline
- Generic introduction to CI
- Introduction to Gitlab CI
- Installation of Gitlab CI Runner
- Work with CI Jobs
- Creation of CI Pipelines
- Deployment Automatisation
- Docker and CI
        `} escapeHtml={false}/>
      </TextFrame>
      <TextFrame>
        <ReactMarkdown source={`
### Who Should Attend
The course is primarily aimed at developers who are using Gitlab and are wanting to start using Gitlab CI. At the same time, Gitlab CI might be the reason why people are transferring onto Gitlab. The course is also useful for DevOps who want to simplify their routine tasks with deployment automatisation.
        `}/>
        <TwoCol
          col1={
            <ReactMarkdown source={`
#### Skill Requirements
- Basic Linux knowledge
- Basic Terminal knowledge
- Basic Git knowledge is of benefit - [Git training](https://ondrej-sika.uk/git/)
- The [Gitlab Course](https://ondrej-sika.uk/gitlab-ci/install/) is of benefit
            `} escapeHtml={false}/>
          }
          col2={
            <ReactMarkdown source={`
#### Technical Requirements
- Access to the internet - ideally without corporate proxy, or proxy set up in Docker
            `} escapeHtml={false}/>
          }
        />
      </TextFrame>
      <TextFrameWithImage
        header="Lektor: Ondřej Sika"
        imgUrl="/static/ondrejsika.jpg"
        >
        <ReactMarkdown source={`
A little bit of background about myself, I am a software developer for Slush Pool and a trainer. The Gitlab CI course is the second most popular training after Docker; the two are closely related. I lead all the courses myself. I am experienced in Gitlab CI from multiple projects and businesses. Almost all projects that I am working on are using Gitlab CI. Gitlab CI is making my work simpler and quicker - I don't have to worry about routine tasks such as deployment or application building, and I can spend time on tasks that generate returns.
<br/><br/>
For more information on all my courses that I offer, visit ondrej-sika.cz.
<br/><br/>
Get in touch if you have any questions - happy hearing from you!
        `} escapeHtml={false}/>
      </TextFrameWithImage>

      <MyClients HeaderClients="Moji nejvýznamější klienti"/>

      <ThreeCol header="References"
        col1={
          <Recommendation id="bohemiaenergy" lang={site.lang}/>
        }
        col2={
          <Recommendation id="vse" lang={site.lang}/>
        }
        col3={
          <Recommendation id="sit" lang={site.lang}/>
        }
      />
      <TextFrame>
        <ReactMarkdown source={`
### Pricing
Price for one days training
- Open to public (self-funded): 800 GBP excl. VAT
- Open to public (company-funded): 1 000 GBP excl. VAT
- On-site training (on-site): 3 000 GBP excl. VAT
`}/>
      </TextFrame>
      <Contact />
    </div>
    <FooterOndrejSika />
  </div>
)

export default Index
