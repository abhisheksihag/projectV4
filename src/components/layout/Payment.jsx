"use client";

import {
	Box,
	Stack,
	HStack,
	Heading,
	Text,
	VStack,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Button,
  Link,
} from "@chakra-ui/react";
import { Nav } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import { Link as routerLink } from "react-router-dom";

function PriceWrapper(props) {
	const { children } = props;

	return (
		<Box
			mb={4}
			shadow="base"
			borderWidth="1px"
			alignSelf={{ base: "center", lg: "flex-start" }}
			borderColor={useColorModeValue("gray.200", "gray.500")}
			borderRadius={"xl"}
		>
			{children}
		</Box>
	);
}

export default function Payment() {
	return (
		<div>
			<Navbar />
			<Box py={12}>
				<VStack spacing={2} textAlign="center">
					<Heading as="h1" fontSize="4xl">
						Subscription Plans
					</Heading>
					<Text fontSize="lg" color={"gray.500"}>
						Start 3 days Free Trial
					</Text>
				</VStack>
				<Stack
					direction={{ base: "column", md: "row" }}
					textAlign="center"
					justify="center"
					spacing={{ base: 4, lg: 10 }}
					py={10}
				>
					<PriceWrapper>
						<Box py={4} px={12}>
							<Text fontWeight="500" fontSize="2xl">
								Basic
							</Text>
							<HStack justifyContent="center">
								<Text fontSize="3xl" fontWeight="600">
									$
								</Text>
								<Text fontSize="5xl" fontWeight="900">
									3
								</Text>
								<Text fontSize="3xl" color="gray.500">
									/month
								</Text>
							</HStack>
						</Box>
						<VStack
							bg={useColorModeValue("gray.50", "gray.700")}
							py={4}
							borderBottomRadius={"xl"}
						>
							<List spacing={3} textAlign="start" px={12}>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									unlimited Blogs
								</ListItem>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									Post Your Articles
								</ListItem>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									View All Posts
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Link href="https://buy.stripe.com/test_6oE3fI3Erbj73vi8wx">
									<Button
										w="full"
										colorScheme="red"
										variant="outline"
									>
										Buy
									</Button>
								</Link>
							</Box>
						</VStack>
					</PriceWrapper>

					<PriceWrapper>
						<Box position="relative">
							<Box
								position="absolute"
								top="-16px"
								left="50%"
								style={{ transform: "translate(-50%)" }}
							>
								<Text
									textTransform="uppercase"
									bg={useColorModeValue("red.300", "red.700")}
									px={3}
									py={1}
									color={useColorModeValue(
										"gray.900",
										"gray.300"
									)}
									fontSize="sm"
									fontWeight="600"
									rounded="xl"
								>
									Most Popular
								</Text>
							</Box>
							<Box py={4} px={12}>
								<Text fontWeight="500" fontSize="2xl">
									Pro
								</Text>
								<HStack justifyContent="center">
									<Text fontSize="3xl" fontWeight="600">
										$
									</Text>
									<Text fontSize="5xl" fontWeight="900">
										5
									</Text>
									<Text fontSize="3xl" color="gray.500">
										/month
									</Text>
								</HStack>
							</Box>
							<VStack
								bg={useColorModeValue("gray.50", "gray.700")}
								py={4}
								borderBottomRadius={"xl"}
							>
								<List spacing={3} textAlign="start" px={12}>
									<ListItem>
										<ListIcon
											as={FaCheckCircle}
											color="green.500"
										/>
										unlimited Blogs
									</ListItem>
									<ListItem>
										<ListIcon
											as={FaCheckCircle}
											color="green.500"
										/>
										Post Your Articles
									</ListItem>
									<ListItem>
										<ListIcon
											as={FaCheckCircle}
											color="green.500"
										/>
										View All Posts
									</ListItem>
									<ListItem>
										<ListIcon
											as={FaCheckCircle}
											color="green.500"
										/>
										5TB Lorem, ipsum dolor.
									</ListItem>
									<ListItem>
										<ListIcon
											as={FaCheckCircle}
											color="green.500"
										/>
										5TB Lorem, ipsum dolor.
									</ListItem>
								</List>
								<Box w="80%" pt={7}>
									<Link href="https://buy.stripe.com/test_5kA9E6caX4UJ0j67su">
										<Button w="full" colorScheme="red">
											Buy
										</Button>
									</Link>
								</Box>
							</VStack>
						</Box>
					</PriceWrapper>
					<PriceWrapper>
						<Box py={4} px={12}>
							<Text fontWeight="500" fontSize="2xl">
								Advanced
							</Text>
							<HStack justifyContent="center">
								<Text fontSize="3xl" fontWeight="600">
									$
								</Text>
								<Text fontSize="5xl" fontWeight="900">
									10
								</Text>
								<Text fontSize="3xl" color="gray.500">
									/month
								</Text>
							</HStack>
						</Box>
						<VStack
							bg={useColorModeValue("gray.50", "gray.700")}
							py={4}
							borderBottomRadius={"xl"}
						>
							<List spacing={3} textAlign="start" px={12}>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									unlimited Blogs
								</ListItem>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									Post Your Articles
								</ListItem>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									Get Exciting Features
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Link href="https://buy.stripe.com/test_28oaIagrdcnb4zm28b">
									<Button
										w="full"
										colorScheme="red"
										variant="outline"
									>
										Buy
									</Button>
								</Link>
							</Box>
						</VStack>
					</PriceWrapper>
				</Stack>
			</Box>
		</div>
	);
}
