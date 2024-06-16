class launch{
    get search()
    {
        return $("//span[@class='DocSearch-Button-Placeholder']")
    }
    async wdio(){
        await(await this.search).setValue("assertions")
    }

}
export default new launch()