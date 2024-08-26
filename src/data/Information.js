import afique from "./images/afique.png";
export const persons = [
  {
    id: 1,
    name: "Md. Afique Hossain",
    imageSrc: afique,
    mail: "afiquehossain84@gmail.com",
    phone: "+880-1703560778",
    country: "Bangladesh",
    address: "Mohammadpur, Dhaka",
    statement:
      "I am a highly proficient computer science and engineering undergraduate with a passion for software engineering, software development, and ethical hacking. I have hands-on experience in object-oriented programming languages such as Java. I am eager to continue learning and making impactful contributions to the exciting and rapidly evolving fields of software engineering, software development, and ethical hacking.",
    hobbies: ["Playing Cricket", "Playing Mobile Game"],
    education: [
      {
        period: "2021 – 2025",
        details: (
          <strong>
            Bachelor of Science in Computer Science and Engineering,{" "}
            <abbr title="GREEN UNIVERSITY OF BANGLADESH">GUB</abbr>
          </strong>
        ),
        additionalInfo: "Currently in 8th semester",
      },
      {
        period: "2016 – 2018",
        details: (
          <strong>
            Higher Secondary School Certificate (HSC), Govt. Science College
          </strong>
        ),
      },
      {
        period: "2014 – 2016",
        details: (
          <strong>
            Secondary School Certificate (SSC), Mohammadpur Govt. High School
          </strong>
        ),
      },
    ],
    skills: [
      {
        category: "Coding",
        technologies: "C, C++, Java, Python",
      },
      {
        category: "Databases",
        technologies: "MySQL, SQLite",
      },
      {
        category: "Web Development",
        technologies: "HTML, CSS, JavaScript, Bootstrap",
      },
      {
        category: "Frame-work",
        technologies: "React",
      },
    ],
    extracurricular: [
      {
        category: "Competitive Programming",
        details: <td>Participated in Regular Contest</td>,
      },
      {
        category: "Problem Solving",
        details: (
          <td>
            Actively solved problems on platforms like{" "}
            <a href="https://codeforces.com/profile/md_afique">Codeforces</a> ,{" "}
            <a href="https://vjudge.net/user/Md_Afique">Vjudge</a>,{" "}
            <a href="https://atcoder.jp/users/md_afique"> AtCoder</a>,and{" "}
            <a href="https://leetcode.com/md_afique_hossain/">LeetCode</a>.
          </td>
        ),
      },
    ],
  },
];
