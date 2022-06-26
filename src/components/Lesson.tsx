import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
   title: string;
   slug: string;
   availableAt: Date;
   type: "live" | "class";
}

export function Lesson(props: LessonProps) {
   const { slug: lessonSlug } = useParams<{ slug: string }>();

   const activeLesson = lessonSlug
      ? lessonSlug
      : "abertura-do-evento-ignite-lab";

   const isLessonAvailable = isPast(props.availableAt);

   const availableDateFormatted = format(
      props.availableAt,
      "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
      {
         locale: ptBR,
      }
   );

   return (
      <Link to={`/event/lesson/${props.slug}`} className="group">
         <span className="text-gray-300">{availableDateFormatted}</span>

         <div
            className={
               activeLesson === props.slug
                  ? "rounded p-4 mt-2 bg-green-500"
                  : "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors"
            }
         >
            <header className="flex items-center justify-between">
               {isLessonAvailable ? (
                  <span
                     className={
                        activeLesson === props.slug
                           ? "text-sm text-white font-medium flex items-center gap-2"
                           : "text-sm text-blue-500 font-medium flex items-center gap-2"
                     }
                  >
                     <CheckCircle size={20} />
                     Conteúdo Liberado
                  </span>
               ) : (
                  <span
                     className={
                        activeLesson === props.slug
                           ? "text-sm text-white font-medium flex items-center gap-2"
                           : "text-sm text-orange-500 font-medium flex items-center gap-2"
                     }
                  >
                     <Lock size={20} />
                     Em Breve
                  </span>
               )}

               <span
                  className={
                     activeLesson === props.slug
                        ? "text-xs rounded px-2 py-[0.125rem] text-white border border-white font-bold"
                        : "text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold"
                  }
               >
                  {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
               </span>
            </header>

            <strong
               className={
                  activeLesson === props.slug
                     ? "text-white mt-5 block"
                     : "text-gray-200 mt-5 block"
               }
            >
               {props.title}
            </strong>
         </div>
      </Link>
   );
}
