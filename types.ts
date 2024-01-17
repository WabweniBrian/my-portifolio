type Techstack = {
  id: string;
  title: string;
  image: string;
};

type Project = {
  id: string;
  title: string;
  githubUrl: string;
  demoUrl: string;
  videoId: string;
  description: string;
  previewImage: string;
  techstacks: Techstack[];
};
