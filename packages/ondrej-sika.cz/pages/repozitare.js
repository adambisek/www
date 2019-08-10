import MainBar from "@app/ondrej-sika.cz/components/MainBar";
import Markdown from "@app/common/components/Markdown";

import Head from "next/head";

import site from "@app/ondrej-sika.cz/config";

let style = {
  fontSize: "1.4em",
  fontWeight: "bold"
};

export default () => {
  return (
    <div>
      <Head>
        <title>Repozitáře - Ondrej Sika</title>
      </Head>
      <MainBar MainBarHeader="Repozitáře"></MainBar>

      <div className="container pt-4 pb-2">
        <Markdown
          source={`
  Zde jsou ukazky repozitaru vseho mozneho na Githubu. Inspirujte se, pridaveje stars, issues a pull requesty :)

## Docker

- Traefik proxy s Let's Encrypt pro Docker - https://github.com/ondrejsika/traefik-le
- Docker Registry za Traefik proxy - https://github.com/ondrejsika/docker-registry-traefik
- Ukazky ke [Skoleni Dockeru](/skoleni/docker) - https://github.com/ondrejsika/docker-training-examples


## Gitlab CI

- [Skoleni Gitlab CI](/skoleni/gitlab-ci) - https://github.com/ondrejsika/gitlab-ci-training
- Skripty na vytvoreni Gitlab Runneru v Dockeru (s Docker executorem) - https://github.com/ondrejsika/gitlab-ci-runner
- Image \`ondrejsika/ci\` - https://github.com/ondrejsika/ondrejsika-ci-docker

#### Examples

- Gitlab CI & Kubernetes - https://github.com/ondrejsika/gitlab-ci-example-kubernetes
- Gitlab CI & Docker Compose (+ Traefik) - https://github.com/ondrejsika/gitlab-ci-docker-compose-traefik--example

## Kubernetes

- [Skoleni Kubernetes](/skoleni/kubernetes) - https://github.com/ondrejsika/kubernetes-training
- Kubernetes Ingress pomoci Traefiku - https://github.com/ondrejsika/kubernetes-ingress-traefik
- Jednoduchy HELM balicek - https://github.com/ondrejsika/one-image-helm

[Vsechny repozitare tykajici se Kubernetes na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=kubernetes&type=&language=)


## Terraform

- Kubernetes na Digital Ocean - https://github.com/ondrejsika/terraform-do-kubernetes-example
- Gitlab na Digital Ocean - https://github.com/ondrejsika/terraform-demo-gitlab
- NFS na Digital Ocean - https://github.com/ondrejsika/terraform-demo-nfs
- Droplet na Digital Ocean - https://github.com/ondrejsika/terraform-do-droplet-example

[Vsechny repozitare tykajici se Terraformu na mem Githubu](https://github.com/ondrejsika?utf8=%E2%9C%93&tab=repositories&q=terraform&type=&language=)

## React & Next.js

- Skoleni Reactu (in progress) - https://github.com/ondrejsika/react-training
- Ukazkovy React & Next.js projekt ke skoleni - https://github.com/ondrejsika/react-example
- Repozitar mych webu (monorepo) v Next.js - https://github.com/ondrejsika/ondrejsikawebs
`}
        />
      </div>
    </div>
  );
};
