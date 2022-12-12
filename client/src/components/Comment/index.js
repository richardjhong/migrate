import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COUNTRY_COMMENTS, QUERY_ME } from '../../utils/queries';


const Comment = () => {
    const { countryname: countryParam } = useParams();
    const { loading, data } = useQuery(QUERY_COUNTRY_COMMENTS, {
        variables: { countryname: countryParam }
      });
    console.log(data);


}
export default Comment;