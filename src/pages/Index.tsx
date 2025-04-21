
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MusicIcon, Users, Disc } from "lucide-react";
import { MemberCard } from "@/components/MemberCard";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="relative bg-gradient-to-b from-purple-700 to-purple-900 text-white">
        <div className="container px-4 py-16 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">BTS</h1>
            <p className="text-xl max-w-3xl">
              Bangtan Sonyeondan (방탄소년단) — южнокорейская группа, покорившая 
              сердца миллионов фанатов по всему миру и ставшая глобальным культурным явлением
            </p>
            <div className="flex gap-4 mt-8">
              <Button 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
                onClick={() => {
                  const membersSection = document.getElementById("members");
                  membersSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Users />
                Участники
              </Button>
              <Button 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white"
                onClick={() => {
                  const discographySection = document.getElementById("discography");
                  discographySection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Disc />
                Дискография
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <MusicIcon className="text-purple-500" />
            О группе
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                BTS (корейское название: 방탄소년단, Bangtan Sonyeondan) — южнокорейский бойз-бенд, 
                сформированный в 2013 году компанией Big Hit Entertainment. Группа состоит из семи участников: 
                RM, Jin, SUGA, J-Hope, Jimin, V и Jungkook.
              </p>
              <p className="mb-4">
                BTS стали всемирной сенсацией, став первой корейской группой, которая возглавила 
                Billboard Hot 100 и Billboard 200, выступала на церемонии Grammy и обращалась к ООН. 
                Их музыка охватывает различные жанры, включая хип-хоп, R&B и EDM.
              </p>
              <p>
                ARMY — так называется фандом группы, один из крупнейших и самых преданных сообществ 
                поклонников в мире.
              </p>
            </div>
            <div className="bg-purple-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-800">Достижения BTS</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Многочисленные мировые рекорды в чартах Billboard</li>
                <li>Выступления на самых престижных площадках мира</li>
                <li>Несколько номинаций на премию Grammy</li>
                <li>Выступления на Генеральной Ассамблее ООН</li>
                <li>Множество музыкальных наград, включая American Music Awards, Billboard Music Awards и MTV Video Music Awards</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="members" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Users className="text-purple-500" />
            Участники
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MemberCard
              name="RM (Kim Namjoon)"
              role="Лидер, главный рэпер"
              imageUrl="/placeholder.svg"
              birthDate="12 сентября 1994"
            />
            <MemberCard
              name="Jin (Kim Seokjin)"
              role="Вокалист, визуал"
              imageUrl="/placeholder.svg"
              birthDate="4 декабря 1992"
            />
            <MemberCard
              name="SUGA (Min Yoongi)"
              role="Ведущий рэпер, продюсер"
              imageUrl="/placeholder.svg"
              birthDate="9 марта 1993"
            />
            <MemberCard
              name="J-Hope (Jung Hoseok)"
              role="Главный танцор, рэпер"
              imageUrl="/placeholder.svg"
              birthDate="18 февраля 1994"
            />
            <MemberCard
              name="Jimin (Park Jimin)"
              role="Ведущий вокалист, танцор"
              imageUrl="/placeholder.svg"
              birthDate="13 октября 1995"
            />
            <MemberCard
              name="V (Kim Taehyung)"
              role="Вокалист, визуал"
              imageUrl="/placeholder.svg"
              birthDate="30 декабря 1995"
            />
            <MemberCard
              name="Jungkook (Jeon Jungkook)"
              role="Главный вокалист, танцор"
              imageUrl="/placeholder.svg"
              birthDate="1 сентября 1997"
            />
          </div>
        </div>

        <div id="discography" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Disc className="text-purple-500" />
            Дискография
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Map of the Soul: 7</h3>
                <p className="text-gray-600 mb-3">2020</p>
                <p>Один из самых успешных альбомов группы, который исследует концепции самопознания и становления.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">BE</h3>
                <p className="text-gray-600 mb-3">2020</p>
                <p>Альбом создан во время пандемии, выражающий чувства и мысли участников в этот непростой период.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Dynamite</h3>
                <p className="text-gray-600 mb-3">2020</p>
                <p>Первый сингл группы полностью на английском языке, занявший первое место в Billboard Hot 100.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Butter</h3>
                <p className="text-gray-600 mb-3">2021</p>
                <p>Летний хит, который побил множество рекордов и провел несколько недель на вершине чартов.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Permission to Dance</h3>
                <p className="text-gray-600 mb-3">2021</p>
                <p>Позитивный трек, содержащий элементы языка жестов и несущий послание надежды.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">Proof</h3>
                <p className="text-gray-600 mb-3">2022</p>
                <p>Антологический альбом, охватывающий 9-летнюю историю группы с новыми треками.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
