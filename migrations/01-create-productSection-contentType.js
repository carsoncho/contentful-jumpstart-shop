module.exports = function(migration) {

    const productSection = migration
        .createContentType("productSection")
        .name("Product Section")
        .description("Single product content type")
        .displayField("title");

    const internalName = productSection
        .createField("internalName")
        .name("Internal Name")
        .type("Symbol");

    const title = productSection
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);

    const product = productSection
        .createField("products")
        .name("Products")
        .type("Array")
        .items({
            type: "Link",
            linkType: "Entry",
            validations: [{linkContentType: ["product"]}]
        });

}