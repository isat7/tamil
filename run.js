const {exec} =require("mz/child_process");
const path=require("path");
async function main(){
    const filename=process.argv[2];
    const astfilename=path.basename(filename,".tamil")+".ast";
    const jsFilename=path.basename(filename,".tamil")+".js";

    await exec('node parse.js '+filename);
    await exec('node generate.js '+astfilename);
    const [output]=await exec('node '+jsFilename);
    process.stdout.write(output.toString());

}

main();