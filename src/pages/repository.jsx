import { Box, Card, CardHeader, Heading, CardBody, Stack, StackDivider, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Repos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/tryYourBestAndLeaveTheRest/repos")
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error("Error fetching repositories:", error));
    }, []);
    const name = repos.map((repo) => repo);
    console.log(name)

    // State to track current page and items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    // Calculate index of the first and last item on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = name.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Stack >

                {currentItems.map((each) => (
                    <Card>
                        <CardHeader>
                            <Heading>{each.name}</Heading>
                            <Button>

                                <Link to={each.html_url}>Click here Visit</Link>
                            </Button>
                        </CardHeader>
                    </Card>

                ))}
                <div>
                    {Array.from({ length: Math.ceil(name.length / itemsPerPage) }, (_, index) => (
                        <Button mx={2} _hover={{ bgColor: '#daa' }} key={index + 1} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Button>
                    ))}
                </div>
            </Stack>
        </>
    );
};
export default Repos;
