import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Introduce unit testing",
    Svg: require("@site/static/img/robot-arm-bro.svg").default,
    description: (
      <>
        This guide is a slightly modified version of the material I used to
        introduce unit testing to my embedded development team. I hope it will
        be helpful to those who understand the importance of testing but don't
        know how to introduce unit testing to their embedded development.
      </>
    ),
  },
  {
    title: "Breaking dependencies",
    Svg: require("@site/static/img/programming-bro.svg").default,
    description: (
      <>
        When attempting to apply unit testing to embedded product code, you may
        find that the code under test depends on code that only runs on the
        microcontroller. To enable testing, you need to isolate these
        collaborators or replace them with test doubles.
      </>
    ),
  },
  {
    title: "Test code example",
    Svg: require("@site/static/img/monitor-bro.svg").default,
    description: (
      <>
        I will show a sample test code using Google Test. However, this guide
        focuses more on the methodology of introducing unit tests into embedded
        software development rather than on how to use specific test frameworks.
        The principles shared in this guide are consistent regardless of which
        test framework you use.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="text--right padding-horiz--md">
          <a href="https://storyset.com/online">
            Online illustrations by Storyset
          </a>
        </div>
      </div>
    </section>
  );
}
