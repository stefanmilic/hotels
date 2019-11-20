import React from 'react';
import { Formik, FormikProps } from 'formik';
import Loader from 'react-loader-spinner';
import * as Yup from 'yup';
import { Form, Textarea, Input } from 'react-formik-ui';
import { block } from 'bem-cn';
// import axios from 'axios';

const b = block('comment-form');

interface CommentProps {
  name: string;
  comment: string;
}

const InnerForm = (bag: FormikProps<CommentProps>) => {
  return (
    <Form mode='structured' className={String(b({ submit: bag.isSubmitting }))}>
      <Input
        className={b('input-name')}
        placeholder='Add name and last name'
        autoComplete='off'
        name='fromValue'
      />

      <Textarea
        name='comment'
        className={b('textarea')}
        placeholder='Add comment'
      />
      <button onClick={bag.submitForm} className={b('btn-post')}>
        Post
      </button>
      {bag.isSubmitting && (
        <Loader
          type='ThreeDots'
          color='gray'
          className={String(b('loader'))}
          height={70}
          width={70}
        />
      )}
    </Form>
  );
};

const CommentForm = () => {
  const initialValues: CommentProps = {
    name: '',
    comment: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={false}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape<CommentProps>({
        name: Yup.string(),
        comment: Yup.string(),
      })}
    >
      {InnerForm}
    </Formik>
  );
};

export default CommentForm;
