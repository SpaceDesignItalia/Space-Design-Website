import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";
import { useCustomTheme } from "../../providers/ThemeProvider";
import heroImgDark from "../../assets/hero-img-dark.png";
import heroImgLight from "../../assets/hero-img-light.png";

export default function Home() {

    const { theme } = useCustomTheme();


  return ( 
  <>
     <main className="flex flex-col items-center rounded-2xl px-3 md:rounded-3xl md:px-0">
       <section className="z-20 my-14 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
         <Button
         color="primary"
            endContent={
             <Icon
               className="flex-none outline-none [&>path]:stroke-[2]"
               icon="solar:arrow-right-linear"
               width={20}
             />
           }
           radius="full"
           variant="bordered"
         >
           Scopri le nostre soluzioni
         </Button>
         <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
           <div >
             Soluzioni Software <br /> su Misura
           </div>
         </div>
         <p className="text-center font-normal leading-7 text-default-500 sm:w-[600px] sm:text-[18px]">
           Trasformiamo le tue idee in software di successo. Sviluppiamo soluzioni personalizzate, 
           funzionali e dal design moderno per ottimizzare i processi aziendali e accelerare la crescita del tuo business.
         </p>
         <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
           <Button
             className="h-12 w-[200px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background hover:opacity-90 transition-all duration-300"
             radius="full"
           >
             Iniziamo un Progetto
           </Button>
           <Button
             className="h-12 w-[200px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5 hover:bg-default-50 transition-all duration-300"
             endContent={
               <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                 <Icon
                   className="text-default-500 [&>path]:stroke-[1.5]"
                   icon="solar:arrow-right-linear"
                   width={16}
                 />
               </span>
             }
             radius="full"
             variant="bordered"
           >
             I Nostri Servizi
           </Button>
         </div>
       </section>
       <div className="z-20 mt-auto w-[calc(100%-calc(theme(spacing.4)*2))] max-w-6xl overflow-hidden rounded-tl-2xl rounded-tr-2xl border-1 border-b-0 border-[#FFFFFF1A] bg-background bg-opacity-0 p-4 shadow-lg">
         <img 
           src={theme === "dark" ? heroImgDark : heroImgLight} 
           alt="Hero image" 
           className="rounded-lg transition-all duration-300 hover:scale-[1.02]"
         />
       </div>
     </main>
     <div className="pointer-events-none inset-0 top-[-25%] z-10 scale-150 select-none sm:absolute sm:scale-125">
       <img
         alt="Gradient background"
         src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
         className="opacity-80"
       />
     </div>
   </>
  );
}
