import { Heading, Text } from "@chakra-ui/react"
import { BiFontSize } from "react-icons/bi"
import { Link } from "react-router-dom"

const About = () => {
    return <>
        <Heading>About Me</Heading>
        <Text>Hi there! 👋 I'm Raji, Sherifdeen Ayinla, A Software developer based in Ile-ife. Here's a little bit about me.

        </Text>
        <Heading>Education</Heading>
        <Text>I am currently a Student of the  great University, Obafemi Awolowo University, Also a web Developer specialized in using Nodejs and React to build web apps <a href="mailto:sherifdeenraji96@gmail.com">Contact me</a></Text>
        <Link to={'/Dashboard'}>Go to home</Link>
    </>
}
export default About