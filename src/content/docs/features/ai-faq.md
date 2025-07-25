---
title: Frequently Asked Questions
---

## Getting started

Gnoppix AI provides a unified API to access all the major LLM models on the
market. It also allows users to aggregate their billing in one place and
keep track of all of their usage using our analytics.

Gnoppix AI passes through the pricing of the underlying providers, while pooling their uptime,
so you get most times the same [pricing](hhttps://wiki.gnoppix.org/features/ai-models-price) you'd get from the provider directly, with a
unified API and fallbacks so that you get much better uptime.

To get started, create an account and add credits on the
page. Credits are simply
deposits on Gnoppix AI that you use for LLM inference.
When you use the API or chat interface, we deduct the request cost from your
credits. Each model and provider has a different price per million tokens.

Once you have credits you can either use the chat room, or create API keys
and start using the API. You can read our [quickstart](/support/quickstart)
guide for code samples and more.

The best way to get support is to join our
[Discord](https://discord.gg/WUuT59Fdp9)
) and ping us in the #help forum.
    
For each model we have the pricing displayed per million tokens. There is
usually a different price for prompt and completion tokens. There are also
models that charge per request, for images and for reasoning tokens. All of
these details will be visible on the [models page](https://wiki.gnoppix.org/features/ai-models/).

When you make a request to Gnoppix AI, we receive the total number of tokens processed
by the provider. We then calculate the corresponding cost and deduct it from your credits.
You can review your complete usage history and remaining balance in your User UI.

We pass through the pricing of the underlying providers; there is no markup
on inference pricing (however we do charge a fee when purchasing credits.

## Pricing and Fees

Gnoppix AI charges a small fee (our payment provider cuts) when you purchase credits. We pass through
the pricing of the underlying model providers without any markup, so you pay
the same rate as you would directly with the provider.

Crypto payments are charged a fee of 5%

####  Is there a fee for using my own provider keys (BYOK)? 

No, you can use your own provider API keys on all our Applications for free. 

## Models and Providers


#### What LLM models does Gnoppix AI support?

Gnoppix AI provides access to a wide variety of LLM models, including frontier models from major AI labs.
For a complete list of models you can visit the [models browser](https://media.gnoppix.org/gnoppix_ai_models_all.ods) or fetch the list through the [models api](https://us.api.gnoppix.org/v1/models).


#### How frequently are new models added?
We work on adding models as quickly as we can. We often have partnerships with
the labs releasing models and can release models as soon as they are
available. If there is a model missing that you'd like Gnoppix AI to support, feel free drop us a message 
  
#### What are model variants

Variants are suffixes that can be added to the model slug to change its behavior.

Static variants can only be used with specific models and these are listed in our [models api](https://us.api.gnoppix.org/v1/models).

    1. `:free` - The model is always provided for free and has low rate limits.
    2. `:beta` - The model is not moderated by Gnoppix AI.
    3. `:extended` - The model has longer than usual context length.
    4. `:thinking` - The model supports reasoning by default.

    Dynamic variants can be used on all models and they change the behavior of how the request is routed or used.

    1. `:online` - All requests will run a query to extract web results that are attached to the prompt.
    2. `:nitro` - Providers will be sorted by throughput rather than the default sort, optimizing for faster response times.
    3. `:floor` - Providers will be sorted by price rather than the default sort, prioritizing the most cost-effective options.

#### I am an inference provider, how can I get listed on Gnoppix AI?

If you would like to contact us, the best
place to reach us is over our [Ticket System](https://gnoppix.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1).

#### What is the expected latency/response time for different models?

We have a world-wide enabled smart routing with servers all over the world, which balances and optimizes for low latency. Nevertheless, if you contact a provider by yourself, there is also latency included in your queries, and this can vary significantly between different models and providers.

The expected latency/response time for different LLM models is highly variable and depends on numerous factors, including:

- Model Size and Complexity: Larger, more complex models (e.g., Opus, GPT-4) generally have higher latency due to the increased computational resources required for inference. Smaller, more optimized models (e.g., Flash versions, mini models, Groq-hosted Llama) tend to be much faster.

- Prompt Length (Input Tokens): Longer input prompts require more processing time, increasing the "Time to First Token" (TTFT).

- Response Length (Output Tokens): LLMs generate responses token by token. The total response time is directly proportional to the number of output tokens.

- Hardware and Infrastructure: The type and configuration of GPUs/TPUs, memory bandwidth, and the efficiency of the inference pipeline (e.g., batching, simultaneous inference) significantly impact speed.

- Network Conditions and Geographic Location: The physical distance between your application and the LLM provider's data center, as well as general internet congestion, adds to latency.

- Provider Optimization: Different providers optimize their serving infrastructure differently. Some focus on raw speed, others on cost-efficiency, and some on maximizing throughput.

- "Cold Starts": If a model instance needs to be spun up from an inactive state, the first request might experience higher latency.

- Specific Task: Latency can vary by use case (e.g., coding, summarization, creative writing), as different tasks may stress different parts of the model or require different processing steps.

General Observations (based on recent benchmarks):

Fastest (Lower Latency, Higher Tokens/Second):

- Models specifically designed for speed, like Gemini Flash versions (e.g., 2.0 Flash, 2.5 Flash), Groq-hosted Llama models, and certain Mistral or Llama 3.1 8B Instruct variants, often exhibit latencies in the range of 0.3 to 1.0 seconds for Time to First Token and high throughputs (e.g., 50+ to over 200 tokens/second). These are ideal for real-time interactive applications.

Balanced Performance:

-Models like OpenAI's GPT-4o, GPT-4o-mini, and Anthropic's Claude 3.5 Sonnet often strike a balance between capability and speed, with TTFT generally in the 0.4 to 2.0 second range and good token generation rates (e.g., 60-80 tokens/second).

Higher Latency (for more complex tasks or larger models):

- Larger, more powerful models such as Anthropic's Claude Opus, GPT-4.1, or complex Gemini Pro versions can have higher latencies, sometimes in the 2.0 to 5.0+ second range for Time to First Token, particularly for longer inputs or more involved reasoning. These are often chosen when quality and reasoning capabilities are prioritized over instantaneous response.

- Some "preview" or very large models might also show higher latencies due to their experimental nature or sheer size (e.g., GPT-4.5 Preview).

:::note
For critical applications, it's always recommended to benchmark specific models with your typical input/output lengths and use cases to get accurate latency figures for your environment.
::: 


#### How does model fallback work if a provider is unavailable?
If a provider returns an error Gnoppix AI will automatically fall back to the
next provider. This happens transparently to the user and allows production
apps to be much more resilient. 

## Privacy and Data Logging

Please see our [Terms of Service](https://wiki.gnoppix.org/policy/terms_of_service) and [Privacy Policy](https://wiki.gnoppix.org/policy/privacy_policy).
We take your privacy and security very seriouse. We always uggesst use Open Source LLM before Closed Source. 


#### What data is logged during API use?

We log basic request metadata (timestamps, model used, token counts). Prompt
and completion are not logged by default. We do zero logging on our site of your prompts/completions,
even if an error occurs.  


#### What data is logged during Chatroom use?
  All conversations
  in the chatroom are stored locally on our Server. Conversations will sync across devices.
  It is possible to exporti/export and delete conversations using the settings menu in the chatroom.

#### What third-party sharing occurs?
Gnoppix AI is a proxy that sends your requests to the model provider for it to be completed.
We work with all providers to, when possible, ensure that prompts and completions are not logged or used for training.

We do not guarantee that your prompts will not be stored or further processed by 3rd.Party providers. With our own, local, open-source modules, we guarantee that these requests will not be reused.
[Here](https://wiki.gnoppix.orgfeatures/ai-models) is an overview of our individual negotiations with the providers.


## Credit and Billing Systems

#### What purchase options exist?
Gnoppix AI uses a credit system where the base currency is US dollars. All
of the pricing on our site and API is denoted in dollars. Users can top up
their balance manually or set up auto top up so that the balance is
replenished when it gets below the set threshold.
  
#### Do credits expire?
Per our [terms](https://wiki.gnoppix.org/policy/ai_terms_of_service), we reserve the right to expire
unused credits after one year of purchase.

#### My credits haven't showed up in my account

If you paid using PayPal, sometimes there is an issue with the PayPal 
integration and credits can get delayed in showing up on your account. Please allow up to six hours.
If your credits still have not appeared after an hour, contact us with a [Ticket](https://gnoppix.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1) and we will
look into it.

If you paid using crypto, please reach out to us on [Discord](https://discord.gg/WUuT59Fdp9)
and we will look into it.

#### What's the refund policy?
Refunds for unused Credits may be requested within twenty-four (24) hours from the time the transaction was processed. If no refund request is received within twenty-four (24) hours following the purchase, any unused Credits become non-refundable. To request a refund within the eligible period, you must email at support@gnoppix.com. The unused credit amount will be refunded to your payment method; the platform fees are non-refundable. Note that cryptocurrency payments are never refundable.


#### How to monitor credit usage?'>

The Activity page allows users to view
their historic usage and filter the usage by model, provider and api key.

We also provide a credits api that has
live information about the balance and remaining credits for the account.

#### What free tier options exist?

All Gnoppix Member receive a very small free allowance to be able to test out Gnoppix AI.
There are many free models available
on Gnoppix AI, it is important to note that these models have low shared rate limits 1000 requests per day total
and are usually **not suitable for production use.** 


#### How do volume discounts work?
Gnoppix AI does not currently offer volume discounts, but you can reach out to us
over email if you think you have an exceptional use case.

#### What payment methods are accepted?
We accept all major credit cards via. PayPal.

We are working on integrating other payment solutions soon, if there are any payment
methods that you would like us to support please reach out on [Discord](https://discord.gg/WUuT59Fdp9).


#### How does Gnoppix AI make money?

We charge a small fee when purchasing credits. We never mark-up the pricing
of the underlying providers, and you'll always pay the same as the provider's
listed price.

## Account Management

#### How can I delete my account?

Go to the [Settings](https://us.api.gnoppix.org) page and click Manage Account.
In the modal that opens, select the Security tab. You'll find an option there to delete your account.

:::note 
unused credits will be lost and cannot be reclaimed if you delete and later recreate your account.
:::

#### How can I contact support?
The best way to reach us is to join our
[Discord](https://discord.gg/WUuT59Fdp9) and ping us in the #help forum.
Alternative you can send a message [Ticket System](https://gnoppix.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1)


