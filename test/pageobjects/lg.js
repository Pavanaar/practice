class launch{
    get search()
    {
        return $("//span[@class='DocSearch-Button-Placeholder']")
    }
    async wdio(){
        await this.search.click()
    }

}
export default new launch()