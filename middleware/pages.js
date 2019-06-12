export default function (context) {
    // go tell the store to update the page
    context.store.commit('updatePage', context.route.name)

    // context.store.commit('updateTitle', context.store.Donor.Title)
    // context.store.commit('updateFirstName', context.store.Donor.FirstName)
    // context.store.commit('updateLastName', context.store.Donor.LastName)
    // context.store.commit('updatePhone', context.store.Donor.Phone)
    // context.store.commit('updateEmailAddress', context.store.Donor.EmailAddress)
}
