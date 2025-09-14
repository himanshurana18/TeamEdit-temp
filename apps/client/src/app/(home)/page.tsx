// // import { Suspense } from "react";
// // import Image from "next/image";

// // import { AboutButton } from "@/components/about-button";
// // import { AnimatedGridBackground } from "@/components/animated-grid-bg";

// // import { RoomAccessForm } from "@/components/room-access-form";
// // import { ShowcaseGrid } from "@/components/showcase-grid";
// // import { Status } from "@/components/status";

// // interface PageProps {
// //   searchParams: Promise<{
// //     room: string;
// //   }>;
// // }
// // export default async function Page({ searchParams }: PageProps) {
// //   const roomId = (await searchParams).room;

// //   return (
// //     <>
// //       <div
// //         aria-hidden="true"
// //         role="presentation"
// //         className="fixed inset-0 -z-10 bg-[#111623]"
// //       />
// //       <div
// //         aria-hidden="true"
// //         role="presentation"
// //         className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#fb568a]/50 via-[#c240ff]/50
// //           to-[#3b77fd]/50 to-90%"
// //       />
// //       <div className="dark fixed inset-0 -z-10">
// //         <AnimatedGridBackground />
// //       </div>
// //       <main
// //         className="dark relative flex min-h-full w-full flex-col overflow-hidden
// //           min-[1189px]:flex-row"
// //       >
// //         {/* Left Section - Form */}
// //         <div
// //           className="my-2 flex min-h-[700px] w-full flex-col justify-center p-4 min-[560px]:p-8
// //             min-[1189px]:w-5/12 min-[1189px]:items-center"
// //         >
// //           <div className="w-full max-w-xl">
// //             <div className="mb-6 space-y-6">
// //               <h1
// //                 className="text-foreground flex flex-row items-start gap-2 text-4xl font-bold
// //                   tracking-tight sm:text-5xl"
// //               >
// //                 <Image
// //                   src="/images/TeamEdit-logo.png"
// //                   alt="TeamEdit Logo"
// //                   width={96}
// //                   height={96}
// //                   className="size-20 min-[1189px]:size-24"
// //                   priority
// //                 />
// //                 <div className="flex flex-col items-start text-start">
// //                   <span>Many Minds</span>
// //                   <span className="flex items-end gap-2 min-[1189px]:items-baseline">
// //                     <span>One Editor</span>
// //                     <span
// //                       className="bg-gradient-to-r from-[#fb568a] to-[#e456fb] bg-clip-text text-transparent
// //                         drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
// //                     >
// //                       TeamEdit
// //                     </span>
// //                   </span>
// //                 </div>
// //               </h1>
// //               <p className="text-foreground/90 w-full whitespace-pre-line text-lg sm:w-[93%] sm:text-xl">
// //                 A coding space built for teams. Start now, skip the sign-up.
// //               </p>
// //             </div>

// //             <Suspense fallback={null}>
// //               <RoomAccessForm roomId={roomId} />
// //             </Suspense>
// //           </div>
// //         </div>

// //         {/* Right Section - Showcase Grid */}
// //         {/* <div
// //           className="dark relative flex w-full max-w-5xl flex-1 items-center justify-center
// //             min-[1189px]:w-7/12 min-[1189px]:pr-8"
// //         >
// //           <ShowcaseGrid />
// //         </div> */}

// //         <div className="dark fixed bottom-2.5 right-3 flex items-center gap-x-3"></div>
// //       </main>
// //     </>
// //   );
// // }
// // Design: mobile-first, neutral background, blue primary, accessible spacing/typography, no gradients.
// import Image from "next/image";
// import { Suspense } from "react";

// import { RoomAccessForm } from "@/components/room-access-form";
// import { Status } from "@/components/status";
// import { ShowcaseGrid } from "@/components/showcase-grid";

// type Search = Record<string, string | string[] | undefined>;

// export default async function Home({
//   searchParams,
// }: {
//   searchParams?: Promise<Search> | Search;
// }) {
//   // Support both promise and object forms of searchParams without changing logic.
//   const sp = (await (searchParams as any)) ?? {};
//   const roomIdParam = Array.isArray(sp.roomId) ? sp.roomId[0] : sp.roomId;
//   const roomId = (roomIdParam ?? "") as string;

//   return (
//     <main className="min-h-dvh bg-background text-foreground">
//       {/* Header */}
//       <header className="border-b">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
//           <div className="flex items-center gap-3">
//             <Image
//               src="/images/TeamEdit-logo.png"
//               alt="TeamEdit logo"
//               width={28}
//               height={28}
//               priority
//             />
//             <span className="font-semibold tracking-tight">
//               TeamEdit
//               <span className="sr-only"> — collaborative coding</span>
//             </span>
//           </div>
//           <div className="text-sm">{/* <Status /> */}</div>
//         </div>
//       </header>

//       {/* Hero + Form */}
//       <section className="mx-auto max-w-6xl px-4">
//         <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 md:py-12 lg:gap-12">
//           <div className="flex flex-col justify-center">
//             <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">
//               Collaborate on code in real time
//             </h1>
//             <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-foreground/70 md:text-base">
//               Create a room or join an invite to start pairing instantly. Your
//               editor, terminal, preview, and notes—shared live with your team.
//             </p>
//             <ul className="mt-6 grid gap-2 text-sm text-foreground/80">
//               <li className="flex items-center gap-2">
//                 <span
//                   className="inline-block size-1.5 rounded-full bg-blue-600"
//                   aria-hidden="true"
//                 />
//                 Real-time cursors and highlights
//               </li>
//               <li className="flex items-center gap-2">
//                 <span
//                   className="inline-block size-1.5 rounded-full bg-blue-600"
//                   aria-hidden="true"
//                 />
//                 Shared terminal and instant preview
//               </li>
//               <li className="flex items-center gap-2">
//                 <span
//                   className="inline-block size-1.5 rounded-full bg-blue-600"
//                   aria-hidden="true"
//                 />
//                 GitHub integration and shared notes
//               </li>
//             </ul>
//           </div>

//           <div className="md:pl-4">
//             <Suspense>
//               <RoomAccessForm roomId={roomId} />
//             </Suspense>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="border-t bg-muted/20">
//         <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
//           <h2 className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
//             Everything you need to pair effectively
//           </h2>
//           <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground/70 md:text-base">
//             Powerful collaboration tools with sensible defaults. No setup
//             required.
//           </p>
//           <div className="mt-6 md:mt-8">
//             <ShowcaseGrid />
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-foreground/60">
//           <p>&copy; {new Date().getFullYear()} TeamEdit</p>
//           <p>Built for fast, focused collaboration</p>
//         </div>
//       </footer>
//     </main>
//   );
// }
import Image from "next/image";
import { Suspense } from "react";

import { RoomAccessForm } from "@/components/room-access-form";
import { Status } from "@/components/status";
import { ShowcaseGrid } from "@/components/showcase-grid";

type Search = Record<string, string | string[] | undefined>;

export default function Home({ searchParams }: { searchParams?: Search }) {
  const sp = searchParams ?? {};
  const roomIdParam = Array.isArray(sp.roomId) ? sp.roomId[0] : sp.roomId;
  const roomId = (roomIdParam ?? "") as string;

  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/TeamEdit-logo.png"
              alt="TeamEdit logo"
              width={28}
              height={28}
              priority
            />
            <span className="font-semibold tracking-tight">
              TeamEdit
              <span className="sr-only"> — collaborative coding</span>
            </span>
          </div>
          <div className="text-sm">{/* <Status /> */}</div>
        </div>
      </header>

      {/* Hero + Form */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 md:py-12 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">
              Collaborate on code in real time
            </h1>
            <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-foreground/70 md:text-base">
              Create a room or join an invite to start pairing instantly. Your
              editor, terminal, preview, and notes—shared live with your team.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <span
                  className="inline-block size-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Real-time cursors and highlights
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="inline-block size-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                Shared terminal and instant preview
              </li>
              <li className="flex items-center gap-2">
                <span
                  className="inline-block size-1.5 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                GitHub integration and shared notes
              </li>
            </ul>
          </div>

          <div className="md:pl-4">
            <Suspense>
              <RoomAccessForm roomId={roomId} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 className="text-balance text-xl font-semibold tracking-tight md:text-2xl">
            Everything you need to pair effectively
          </h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground/70 md:text-base">
            Powerful collaboration tools with sensible defaults. No setup
            required.
          </p>
          <div className="mt-6 md:mt-8">
            <ShowcaseGrid />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-foreground/60">
          <p>&copy; {new Date().getFullYear()} TeamEdit</p>
          <p>Built for fast, focused collaboration</p>
        </div>
      </footer>
    </main>
  );
}
