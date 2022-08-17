const countOfWorkingDays = () => {
    const startTime = new Date('January 1');
    const endTime = new Date ('August 31');
    let timeDifference = (endTime-startTime)/1000/60/60/24/(7/5);
    return Math.round(timeDifference);
}





export default countOfWorkingDays;
