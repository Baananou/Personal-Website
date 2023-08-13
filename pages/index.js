import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "../i18n/next-i18next.config";
import Typed from "react-typed";

//Components
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from "next/link";

const Home = () => {
	return (
		<div className="bg-primary/60 h-full">
			<ParticlesContainer />
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
					<motion.div
						variants={fadeIn("down", 0, 2)}
						initial="hidden"
						animate="show"
						exit="hidden">
						<h6 className="text-xl">Bonjour ! Je suis</h6>
						<h1 className="my-4  text-2xl">MOHAMED YESSINE BAANANOU</h1>
						<Typed
							strings={[
								"Développeur Fullstack",
								"Développeur Frontend",
								"Développeur Backend",
							]}
							typeSpeed={40}
							backSpeed={50}
							className={"text-accent font-bold"}
							loop
						/>
					</motion.div>
					<motion.div
						variants={fadeIn("down", 0, 3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
						<p className="text-xl text-justify my-4">
							Étudiant en 5ème année de génie informatique à l&apos;école
							Polytechnique de Sousse, doté d&apos;une expertise polyvalente en
							technologies modernes ( Web, Mobile et Design ). Secouriste engagé
							et impliqué dans divers projets sociaux.
						</p>
					</motion.div>
					<motion.div
						variants={fadeIn("down", 0, 4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="xl:flex gap-10 justify-center hidden xl:absolute xl:bottom-80 bottom-72">
						<a href={""} download="resume" target="_blank" rel="noreferrer">
							<button
								className="sm:w-[180px] text-accent 
                                        rounded-[30px] no-underline	w-36 text-base 
                                        font-medium h-12 border-[3px] border-accent 
                                        transition duration-100 ease-out 
                                        hover:bg-lightprime hover:text-[#15202B]
                                         hover:border-lightprime ">
								Télécharger CV
							</button>
						</a>
						<Link href="/#contacts">
							<button
								className="sm:w-[180px] bg-accent 
                                text-[#15202B] rounded-[30px] no-underline	
                                w-36 text-base font-medium h-12 border-[3px]
                                 border-accent transition duration-100 
                                 ease-out hover:bg-lightprime hover:text-[#15202B]
                                  hover:border-lightprime ">
								Contact
							</button>
						</Link>
					</motion.div>
				</div>
			</div>

			<div className="w-[1200px] h-full absolute right-0 bottom-0">
				<div className="bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
				{/* xl:bg-explosion */}
				<motion.div
					variants={fadeIn("up", 0, 5)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 1, ease: "easeInOut" }}
					className="w-full h-full max-w-[700px] max-h-[700px] absolute 
			lg:bottom-0 lg:right-[8%]">
					<Avatar />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;

export const getServerSideProps = async (context) => {
	return {
		props: {
			...(await serverSideTranslations(
				context.locale,
				["common", "home"],
				nextI18nextConfig
			)),
		},
	};
};
