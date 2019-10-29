import LectureImgMdLg from "@app/ondrej-sika.cz/components/LectureImgMdLg";
import LectureImgSm from "@app/ondrej-sika.cz/components/LectureImgSm";
import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import TextWithImg from "@app/ondrej-sika.cz/components/TextWithImg";
import StatisticBar from "@app/ondrej-sika.cz/components/StatisticBar";
import CompaniesBar from "@app/ondrej-sika.cz/components/CompaniesBar";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Ondrej Sika - IT Školení, konzultace a workshopy</title>
    </Head>
    <MainBar
      MainBarHeader="IT & DevOps školení, konzultace a workshopy"
      MainBarText="Zlepšuji práci vývojářských týmu zaváděním efektivních procesů ve vývoji. Naučím Vás používat prověřené nástroje a technologie, které povedou k rychlejšímu vývoji a bezpečnějšímu provozu vašeho software."
    ></MainBar>
    <StatisticBar
      NumberOfPeople="650+"
      NumberOfPeopleHeader="Počet odškolených lidí"
      NumberOfCompanies="100+"
      NumberOfCompaniesHeader="Počet firem ve spolupráci"
      NumberOfLectures="150+"
      NumberOfLecturesHeader="Počet uskutečněných školení"
    />

    <div className="container">
      <LectureImgMdLg LectureImgHeader="Kurzy co školím" />
      <LectureImgSm LectureImgHeader="Kurzy co školím" />
      <TextWithImg TextWithImgHeader="O mně">
        Jmenuji se Ondřej, vývojem softwaru se zabývám od roku 2009 a od roku
        2013 předávám své zkušenosti na školeních. Pracoval jsem pro malé firmy,
        startupy i velké korporace s cílem zefektivnit jim proces vývoje,
        testování a nasazování software.
        <br />
        <br />
        <h4>Školení</h4>
        Předně se věnuji školení, všechny kurzy jsou formou workshopů (hands-on)
        a stavím je na svých dlouholetých znalostech a zkušenostech z vývoje,
        testování a provozování softwarových projektů.
        <br />
        <br />
        Nástroje jako <a href="/skoleni/git">Git</a>,{" "}
        <a href="/skoleni/docker">Docker</a>,{" "}
        <a href="/skoleni/kubernetes">Kubernetes</a>,{" "}
        <a href="/skoleni/ansible">Ansible</a> nebo{" "}
        <a href="/skoleni/gitlab-ci">CI</a> používám na denní bázi, vše co
        školím jsem použil v reálných projektech a mám s technologií osobní
        zkušenost.
        <br />
        <br />
        Všechny kurzy a školení dělám v českém nebo anglickém jazyce.
      </TextWithImg>
      <CompaniesBar />
    </div>
  </div>
);

export default Index;