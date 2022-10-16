import React from 'react';
import { useNavigate } from "react-router-dom";

import {
  Flex,
  FormControl,
  Table,
  Thead,
  Tbody,
  VStack,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button
} from '@chakra-ui/react'
import { Formik} from 'formik';
import * as Yup from 'yup';

function createList() {
    let values1_string = localStorage.getItem("view1_values");
    values1_string = values1_string.substring(0, values1_string.length-1) + ",";
    console.log(values1_string);
    let values2_string = localStorage.getItem("view2_values").replace("{", "");
    console.log(values2_string);

    const values_string = values1_string + values2_string;

    const values = JSON.parse(values_string);
    console.log(values);

    return values;
}

const View2 = () => {
  const navigate = useNavigate();
  const list = createList();
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <VStack>
          <TableContainer>
                <Table variant='simple'>
                  <TableCaption>
                    User Data
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>DOB</Th>
                      <Th>Gender</Th>
                      <Th>HCard</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{list["firstName"] + " " + list["lastName"]}</Td>
                      <Td>{list["birthDay"] + "/" + list["birthMonth"] + "/" + list["birthYear"]}</Td>
                      <Td>{list["gender"]}</Td>
                      <Td>{list["healthCard"]}</Td>
                    </Tr>
                  </Tbody>
                </Table>
          </TableContainer>
            <Formik
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false);
                navigate('/');
            }, 400);
          }}
          >
              {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Button type="submit" colorScheme="purple" width="full">Restart</Button>
              </FormControl>
            </form>
            )}
          </Formik>
          </VStack>

      </Flex>
  );
};

export default View2;