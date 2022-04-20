const lengthLongestPath = (input : string) : number => {

    const _nameList : string[] = input.split("\n");
    const depathLengthMap : Map<number, number> = new Map<number, number>();
    depathLengthMap.set(-1,0);

    let res = 0;

    for(const name of _nameList) {
        const deptch = countString(name,"\t");

        depathLengthMap.set(deptch,depathLengthMap.get(deptch-1) + name.length - deptch);

        if(name.indexOf(".") !== -1) res = Math.max(res,depathLengthMap.get(deptch) + deptch);        
    }

    return res;
}

const countString = (input : string, target : string) : number => {
    let postion : number = 0, count : number = 0;
    let index = input.indexOf(target,postion);
    while(index !== -1){
        count++;
        postion = index + 1;
        index = input.indexOf(target,postion);
    }

    return count;
}