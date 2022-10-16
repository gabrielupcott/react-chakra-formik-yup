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


const View2 = () => {
  const navigate = useNavigate();
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh"> 
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
        initialValues={{ birthYear: '', birthMonth: '', birthDay: '', gender: '' , healthCard: ''}}
        validationSchema={Yup.object({
            birthYear: Yup.number()
            .max(2022, 'Must not be from future')
            .min(1900, 'Must be above 1900')
            .required('Required'),
            birthMonth: Yup.number()
            .max(12, 'Cannot be above 12')
            .min(1, 'Cannot be below 1')
            .required('Required'),
            birthDay: Yup.number()
            .max(31, 'Cannot be above 31')
            .min(1, 'Cannot be below 1')
            .required('Required'),
            gender: Yup.string()
            .required('Required'),
            healthCard: Yup.string()
            .required('Required')
            .test('is-valid', 'invalid', function (value) {
              // Luhn algorithm (Mod 10) 
                let sum = 0;
                let len = value.length;
                let isSecond = false;

                for (let i = len - 1; i >= 0; i --){
                    let d = value[i].charCodeAt() - '0'.charCodeAt();

                    if (isSecond == true)
                        d = d * 2;

                        sum += parseInt(d / 10, 10);
                        sum += d % 10;

                        isSecond = !isSecond;
                }
                return (sum % 10 == 0)
            }),

        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem("view2_values", JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate('/view3');
          }, 400);
        }}
      >
        {({handleSubmit, errors, touched}) => (
          <form onSubmit={handleSubmit} noValidate>

            <VStack spacing={4} align="flex-start">

                <FormControl isInvalid={errors.birthYear && touched.birthYear} isRequired>
                  <FormLabel htmlFor="birthYear">Year of birth</FormLabel>
                  <Field as={Input} variant="filled" name ="birthYear" type="text" />
                  <FormErrorMessage name="birthYear">{errors.birthYear}</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={errors.birthMonth && touched.birthMonth} isRequired>
                  <FormLabel htmlFor="birthMonth">Month of birth</FormLabel>
                  <Field as={Input} variant="filled" name ="birthMonth" type="text" />
                  <FormErrorMessage name="birthMonth">{errors.birthMonth}</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={errors.birthDay && touched.birthDay} isRequired>
                  <FormLabel htmlFor="birthDay">Day of birth</FormLabel>
                  <Field as={Input} variant="filled" name ="birthDay" type="text" />
                  <FormErrorMessage name="birthDay">{errors.birthDay}</FormErrorMessage>

                </FormControl>
              
                <FormControl isInvalid={errors.healthCard && touched.healthCard} isRequired>
                  <FormLabel htmlFor="healthCard">Health Card Number</FormLabel>
                  <Field as={Input} variant="filled" name ="healthCard" type="text" />
                  <FormErrorMessage name="healthCard">{errors.healthCard}</FormErrorMessage>

                </FormControl>

                <FormControl isInvalid={errors.gender && touched.gender} isRequired>
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <Field as={Input} variant="filled" name ="gender" type="text" />
                  <FormErrorMessage name="gender">{errors.gender}</FormErrorMessage>

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

export default View2;