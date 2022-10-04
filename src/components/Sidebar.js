import React, { useState } from 'react'
import {
    Flex,
    IconButton
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiSettings,
    FiActivity,
    FiTablet
} from 'react-icons/fi'
import NavItem from '../components/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "15px" : "30px"}
            w={navSize === "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize === "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem navSize={navSize} icon={FiHome} title="Name" description="Khaela May T. Lee" />
                <NavItem navSize={navSize} icon={FiSettings} title="Education" description="Bachelor of Science in Information Technology" />
                <NavItem navSize={navSize} icon={FiActivity} title="Hobby" description="Reading" />
                <NavItem navSize={navSize} icon={FiTablet} title="Tech" description="C# , PHP, JS" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                
            </Flex>
        </Flex>
    )
}