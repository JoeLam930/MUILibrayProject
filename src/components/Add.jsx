import { Add as AddIcon } from '@mui/icons-material'
import { Avatar, Box, Fab, Modal, styled, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const SytledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
        title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50%-2px)", md:30}}}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <SytledModal
          open={open}
          onClose={e=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor="white" borderRadius={5} p={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt="" src=""
              sx={{width:30, height:30}}
              />
              <Typography fontWeight={500} variant="span">Joe Lam</Typography>
          </UserBox>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;