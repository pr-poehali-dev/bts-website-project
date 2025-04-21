
import { Layout } from "@/components/Layout";
import { MemberCard } from "@/components/MemberCard";
import { SongCard } from "@/components/SongCard";

const Index = () => {
  const members = [
    {
      name: "RM (Kim Namjoon)",
      role: "Лидер, рэпер",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Jin (Kim Seokjin)",
      role: "Вокалист",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "SUGA (Min Yoongi)",
      role: "Рэпер",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "J-Hope (Jung Hoseok)",
      role: "Рэпер, танцор",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Jimin (Park Jimin)",
      role: "Вокалист, танцор",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "V (Kim Taehyung)",
      role: "Вокалист",
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Jungkook (Jeon Jungkook)",
      role: "Вокалист, танцор",
      imageUrl: "/placeholder.svg",
    }
  ];

  const songs = [
    {
      title: "Dynamite",
      year: "2020",
      description: "Первый англоязычный сингл группы, возглавивший Billboard Hot 100"
    },
    {
      title: "Butter",
      year: "2021",
      description: "Второй англоязычный сингл, который побил множество рекордов"
    },
    {
      title: "Spring Day",
      year: "2017",
      description: "Одна из самых популярных песен группы в Корее"
    },
    {
      title: "Blood Sweat & Tears",
      year: "2016",
      description: "Хит, принесший группе первую победу на музыкальном шоу"
    },
    {
      title: "Boy With Luv",
      year: "2019",
      description: "Коллаборация с Холзи, побившая рекорд по просмотрам на YouTube"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">BTS</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Bangtan Sonyeondan (방탄소년단) — популярная южнокорейская группа, 
            дебютировавшая в 2013 году под лейблом Big Hit Entertainment.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Участники группы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Популярные песни</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {songs.map((song, index) => (
              <SongCard
                key={index}
                title={song.title}
                year={song.year}
                description={song.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
