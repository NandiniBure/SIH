import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
const BlogDetails = () => {
  return (
    <div className=" h-auto">
      <div className=" m-8 p-2">
        <h1 className=" text-center font-extrabold text-3xl">
          Bill will give mobility to subaltern women but will it change culture?
        </h1>
        <div className="mt-12">
         
          <div className=" border rounded-lg w-full min-h-[8rem] border-gray-500">
           
            <div className=" flex">
              <img
                src="/profile.webp"
                width={70}
                height={70}
                className=" lg:ml-14 rounded-full p-2 m-2"
              />
              <h1 className=" ml-8 text-base font-bold mt-7">
                Badri Narayan
              </h1>
            </div>

            <h2 className=" text-gray-500 ml-6 text-sm p-1">
              Badri Narayan is professor at the Govind Ballabh Pant Social
              Science Institute, Allahabad.
            </h2>
          </div>

          <div className="lg:flex">
            <div className=" mt-5 p-2">
              <p className=" text-center text-base">
                The Women’s Reservation Bill, named the ‘Nari Shakti Vandan
                Adhiniyam’ has been passed by the Parliament. The 128th
                amendment to the Indian Constitution, it is set to expand
                women’s participation in politics and policymaking at the state
                and national level. It will certainly create conditions for more
                women to lead, and catalyse a deeper democracy, a hope expressed
                by Prime Minister Narendra Modi. It will redefine the nature of
                political action, and will make politics more truly
                representative. Here, I assess the mobilisational impact of
                women’s reservation in electoral politics, especially in the
                2024 parliamentary election. As various electoral results show,
                the BJP led by PM Narendra Modi has been able to attract a large
                percentage of women voters. The Women’s Reservation Bill, which
                ensures 33% reservation in parliamentary and assembly seats, is
                going to enhance and consolidate this support. It may bring a
                large number of new women voters and add substantially to the
                BJP’s female cadre. It may give PM Modi long-lasting political
                capital among women, across caste and religion. The timing of
                the Bill is bound to impact the 2024 election and forthcoming
                state elections.
              </p>
              <img
                src="/thumbnail1.jpg"
                alt="img"
                height={500}
                width={500}
                className="m-4  border-spacing-2 md:translate-x-32 lg:translate-x-[27rem] border-4 border-green-500"
              />
              <h2 className=" mb-6 text-center text-gray-500">
                image description
              </h2>
              <p className=" text-center text-base">
                We will see two kinds of contesting narratives around it in the
                coming months. One is the BJP narrative, which will assert that
                it fulfilled the dream of women’s reservation, and the other is
                the Congress narrative, which claims that it initiated this
                discourse in Parliament. As we know, implementers get more
                benefits than initiators. There is only one way through which
                the opposition could try to restrain the enormous flow of women
                voters towards BJP is to give tickets to the right winnable
                women candidates. The opposition may also raise the issue of a
                ‘quota within the quota’ for OBC women, which has not found
                place in this Bill yet. This may help the opposition limit the
                political impact of this Bill in favour of BJP and mobilise OBC
                sentiment in their favour. The opposition parties seem to
                already be working on this line. The Nari Shakti Vandan
                Adhiniyam, like its previous iteration, provides the reservation
                of one-third of the SC/ ST quota for women. This provision could
                bring a qualitative change to Indian democracy, right up to the
                margins. It will check the patriarchal chokehold on the
                political culture of subaltern groups, which is the result of
                dominant social groups exerting their influence on them. This
                may shape a new Dalit-Bahujan politics in India. Dalit-Bahujan
                leaders and ideologues like Babasaheb Ambedkar and Kanshi Ram
                tried to make space for women in Dalit politics, and the career
                of BSP leader Mayawati is the outcome of these efforts. While
                Behenji failed to pay back to the community of Dalit women, and
                did not cultivate such leaders in her party, the BSP and
                Mayawati commanded enormous popularity among Dalit women. The
                women’s reservation Bill may galvanise the support base. A huge
                number of aspiring Dalit women leaders may also move towards the
                BJP and other parties for tickets. As we know, there is a large
                and emerging class of educated and entrepreneurial Dalits keen
                to participate in politics. Seven decades of growing grassroots
                democracy has also produced a local leadership of Dalit women.
                These politically aware, capable subaltern women aspire to
                higher leadership. This Bill will bring upward political
                mobility to them. But within the canvas of hope created by this
                Bill, there remain some crucial issues to address. First, among
                SCs and STs, only a few castes and groups in every state and
                region have acquired the political visibility and economic
                capacity to enter the fray. So the women in these large and
                political assertive groups may get a large share of these
                benefits. For example, only five or six out of 66 SC communities
                in Uttar Pradesh, and three or four among 20 SC communities in
                Bihar have garnered the benefit of protective discrimination
                policies. This phenomenon can be observed in other Indian states
                too. Among tribal communities too, the women who come from
                larger, more economically empowered groups may come and claim
                these opportunities. But over time, this democratic
                strengthening will trickle down, and reach the margins of
                marginal groups. The major challenge for political parties is to
                distribute these opportunities horizontally, and not just
                vertically. But will the participation of women produce a new
                culture in politics, and push back against patriarchal norms?
                Much will depend on how these beneficiaries of women’s
                reservation negotiate with identities such as caste, clan and
                religion, which play an enormous mobilisational role in our
                electoral democracy. Women’s reservation in politics will create
                conditions for these triply oppressed women — those who bear the
                brunt of being female, Dalit and poor — to subvert and turn
                these facts into avenues of empowerment. Now, they will claim
                their place in politics and policymaking as women, as Dalit or
                tribal women, or as socially marginalised persons. We are going
                to see a whole new face of Indian democracy in the coming years.
              </p>

              <h2 className=" text-gray-400 text-center mt-5">
                -------END OF ARTICLE--------
              </h2>
              <div className=" flex justify-center gap-5 mt-10">
                <span className=" hover:scale-90 border text-center shadow-lg h-8 w-28 border-blue-900 rounded-lg p-1 text-blue-900">
                  <FacebookIcon />
                  facebook
                </span>
                <span className="hover:scale-90 border text-center  w-28 shadow-lg border-orange-600 rounded-lg p-1 text-orange-600">
                  <EmailIcon />
                  Mail
                </span>
                <span className="hover:scale-90 border text-center  w-28 shadow-lg border-blue-600 rounded-lg p-1 text-blue-600">
                  <TwitterIcon />
                  Twitter
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
