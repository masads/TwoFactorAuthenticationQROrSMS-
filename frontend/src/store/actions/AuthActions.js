function setAlert(state,{payload:{text}})
{
    state.alert=true;
    state.alertMessage=text;
}
function AlertOff(state,_)
{
    state.alert=false;
    state.alertMessage="Something went wrong!";
}

const authActions = {
    setAlert,
    AlertOff
};

export default authActions;