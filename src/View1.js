import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";
import * as Yup from 'yup';

const View1 = () => {
  const navigate = useNavigate();
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
          initialValues={{ firstName: '', lastName: ''}}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                localStorage.setItem("view1_values", JSON.stringify(values, null, 2));
                setSubmitting(false);
                navigate('/view2');
            }, 400);
          }}
        >
            {({handleSubmit, errors, touched}) => (
          <form onSubmit={handleSubmit} noValidate>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={errors.firstName && touched.firstName} isRequired>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Field as={Input} variant="filled" id="firstName" name="firstName" type="text" />
                  <FormErrorMessage name="firstName">{errors.firstName}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.lastName && touched.lastName} isRequired>
                  <FormLabel htmlFor="lastName">Last</FormLabel>
                  <Field as={Input} variant="filled" name="lastName" type="text"/>
                  <FormErrorMessage name="lastName">{errors.lastName}</FormErrorMessage>
                </FormControl>

                <FormControl>
                <Button type="submit" colorScheme="purple" width="full">Submit</Button>
                </FormControl>
            </VStack>
          </form>
          )}
        </Formik>
      </Box>
      </Flex>
    
  );
};

export default View1;